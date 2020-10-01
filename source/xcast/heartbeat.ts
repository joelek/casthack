// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import { guards as autoguard } from "@joelek/ts-autoguard";

export type Ping = {
	"type": "PING"
};

export const Ping = autoguard.Object.of({
	"type": autoguard.StringLiteral.of("PING")
}, {});

export type Pong = {
	"type": "PONG"
};

export const Pong = autoguard.Object.of({
	"type": autoguard.StringLiteral.of("PONG")
}, {});

export type Autoguard = {
	"Ping": Ping,
	"Pong": Pong
};

export const Autoguard = {
	"Ping": Ping,
	"Pong": Pong
};
