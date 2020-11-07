// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import { guards as autoguard } from "@joelek/ts-autoguard";

export type ErrorMessage = {
	"errors": string[]
};

export const ErrorMessage = autoguard.Object.of<ErrorMessage>({
	"errors": autoguard.Array.of(autoguard.String)
});

export type RegisterRequest = {
	"username": string,
	"password": string,
	"name": string,
	"key_id": string
};

export const RegisterRequest = autoguard.Object.of<RegisterRequest>({
	"username": autoguard.String,
	"password": autoguard.String,
	"name": autoguard.String,
	"key_id": autoguard.String
});

export type RegisterResponse = {
	"token": string
};

export const RegisterResponse = autoguard.Object.of<RegisterResponse>({
	"token": autoguard.String
});

export type Autoguard = {
	"ErrorMessage": ErrorMessage,
	"RegisterRequest": RegisterRequest,
	"RegisterResponse": RegisterResponse
};

export const Autoguard = {
	"ErrorMessage": ErrorMessage,
	"RegisterRequest": RegisterRequest,
	"RegisterResponse": RegisterResponse
};
