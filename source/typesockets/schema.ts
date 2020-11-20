// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import { guards as autoguard } from "@joelek/ts-autoguard";

export type Envelope = {
	"type": string,
	"data": any,
	"id"?: string
};

export const Envelope = autoguard.Object.of<Envelope>({
	"type": autoguard.String,
	"data": autoguard.Any,
	"id": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.String
	)
});

export type Autoguard = {
	"Envelope": Envelope
};

export const Autoguard = {
	"Envelope": Envelope
};
