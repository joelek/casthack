import * as libcrypto from "crypto";
import * as libfs from "fs";
import * as libdb from "./database";
import * as utils from "./utils";

let users = JSON.parse(libfs.readFileSync('./private/db/users.json', "utf8")) as libdb.UserDatabase;

let users_index: utils.Index<libdb.UserEntry> = {};

for (let i = 0; i < users.users.length; i++) {
	let user = users.users[i];
	users_index[user.username] = user;
}

let tokens_index: utils.Index<libdb.AuthToken> = {};

for (let i = 0; i < users.tokens.length; i++) {
	let token = users.tokens[i];
	tokens_index[token.selector] = token;
}

function addToken(token: libdb.AuthToken): void {
	users.tokens.push(token);
	tokens_index[token.selector] = token;
	libfs.writeFileSync('./private/db/users.json', JSON.stringify(users, null, "\t"));
}

function password_generate(password: string): string {
	let cost = 14;
	let blockSize = 8;
	let paralellization = 1;
	let salt = libcrypto.randomBytes(16);
	let password_hash = libcrypto.scryptSync(Buffer.from(password, 'utf8'), salt, 32, {
		N: (1 << cost),
		r: blockSize,
		p: paralellization,
		maxmem: (256 << cost) * blockSize
	});
	let params = Buffer.alloc(4);
	params[0] = (cost >> 8);
	params[1] = (cost >> 0);
	params[2] = (blockSize >> 0);
	params[3] = (paralellization >> 0);
	return `$s0$${params.toString('hex')}$${salt.toString('base64')}$${password_hash.toString('base64')}`;
}

function password_verify(password: string, chunk: string): boolean {
	let parts = /^\$s0\$([0-9a-fA-F]{8})\$([A-Za-z0-9+/]{22}==)\$([A-Za-z0-9+/]{43}=)$/.exec(chunk);
	if (parts === null) {
		throw new Error();
	}
	let parameters = Buffer.from(parts[1], 'hex');
	let salt = Buffer.from(parts[2], 'base64');
	let hash = Buffer.from(parts[3], 'base64');
	let cost = (parameters[0] << 8) | (parameters[1] << 0);
	let blockSize = (parameters[2] << 0);
	let paralellization = (parameters[3] << 0);
	let password_hash = libcrypto.scryptSync(Buffer.from(password, 'utf8'), salt, 32, {
		N: (1 << cost),
		r: blockSize,
		p: paralellization,
		maxmem: (256 << cost) * blockSize
	});
	return libcrypto.timingSafeEqual(hash, password_hash);
}

function generate_token(username: string): string {
	let selector = libcrypto.randomBytes(16);
	let validator = libcrypto.randomBytes(16);
	let hash = libcrypto.createHash('sha256');
	hash.update(validator);
	let validator_hash = hash.digest('hex');
	addToken({
		username: username,
		selector: selector.toString('hex'),
		validator_hash: validator_hash
	});
	return `${selector.toString('hex')}${validator.toString('hex')}`;
}

function getToken(username: string, password: string): string {
	let user = users_index[username];
	if (!user) {
		throw new Error();
	}
	if (!password_verify(password, user.password)) {
		throw new Error(`Fak u dolan.`);
	}
	return generate_token(username);
}

function getUsername(chunk: string): string {
	let parts = /^([0-9a-f]{32})([0-9a-f]{32})$/.exec(chunk);
	if (!parts) {
		throw new Error();
	}
	let selector = parts[1];
	let validator = parts[2];
	let token = tokens_index[selector];
	if (!token) {
		throw new Error();
	}
	let hash = libcrypto.createHash('sha256');
	hash.update(Buffer.from(validator, 'hex'));
	let validator_hash = hash.digest();
	if (!libcrypto.timingSafeEqual(Buffer.from(token.validator_hash, 'hex'), validator_hash)) {
		throw new Error();
	}
	return token.username;
}

export {
	getToken,
	getUsername
};
