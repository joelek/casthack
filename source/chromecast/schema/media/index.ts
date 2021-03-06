// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard/dist/lib-shared";
import { MediaInformation } from ".././objects";
import { MediaStatus } from ".././objects";
import { Volume } from ".././objects";

export const LOAD = autoguard.guards.Object.of({
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("LOAD"),
	"media": autoguard.guards.Reference.of(() => MediaInformation),
	"autoplay": autoguard.guards.Union.of(
		autoguard.guards.Boolean,
		autoguard.guards.Undefined
	),
	"currentTime": autoguard.guards.Union.of(
		autoguard.guards.Number,
		autoguard.guards.Undefined
	),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	),
	"activeTrackIds": autoguard.guards.Union.of(
		autoguard.guards.Array.of(autoguard.guards.Number),
		autoguard.guards.Undefined
	)
});

export type LOAD = ReturnType<typeof LOAD["as"]>;

export const PAUSE = autoguard.guards.Object.of({
	"mediaSessionId": autoguard.guards.Number,
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("PAUSE"),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type PAUSE = ReturnType<typeof PAUSE["as"]>;

export const SEEK = autoguard.guards.Object.of({
	"mediaSessionId": autoguard.guards.Number,
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("SEEK"),
	"resumeState": autoguard.guards.Union.of(
		autoguard.guards.Union.of(
			autoguard.guards.StringLiteral.of("PLAYBACK_START"),
			autoguard.guards.StringLiteral.of("PLAYBACK_PAUSE")
		),
		autoguard.guards.Undefined
	),
	"currentTime": autoguard.guards.Union.of(
		autoguard.guards.Number,
		autoguard.guards.Undefined
	),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type SEEK = ReturnType<typeof SEEK["as"]>;

export const STOP = autoguard.guards.Object.of({
	"mediaSessionId": autoguard.guards.Number,
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("STOP"),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type STOP = ReturnType<typeof STOP["as"]>;

export const PLAY = autoguard.guards.Object.of({
	"mediaSessionId": autoguard.guards.Number,
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("PLAY"),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type PLAY = ReturnType<typeof PLAY["as"]>;

export const GET_STATUS = autoguard.guards.Object.of({
	"mediaSessionId": autoguard.guards.Union.of(
		autoguard.guards.Number,
		autoguard.guards.Undefined
	),
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("GET_STATUS"),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type GET_STATUS = ReturnType<typeof GET_STATUS["as"]>;

export const VOLUME = autoguard.guards.Object.of({
	"mediaSessionId": autoguard.guards.Number,
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("VOLUME"),
	"volume": autoguard.guards.Reference.of(() => Volume),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type VOLUME = ReturnType<typeof VOLUME["as"]>;

export const INVALID_PLAYER_STATE = autoguard.guards.Object.of({
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("INVALID_PLAYER_STATE"),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type INVALID_PLAYER_STATE = ReturnType<typeof INVALID_PLAYER_STATE["as"]>;

export const LOAD_FAILED = autoguard.guards.Object.of({
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("LOAD_FAILED"),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type LOAD_FAILED = ReturnType<typeof LOAD_FAILED["as"]>;

export const LOAD_CANCELLED = autoguard.guards.Object.of({
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("LOAD_CANCELLED"),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type LOAD_CANCELLED = ReturnType<typeof LOAD_CANCELLED["as"]>;

export const INVALID_REQUEST = autoguard.guards.Object.of({
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("INVALID_REQUEST"),
	"reason": autoguard.guards.Union.of(
		autoguard.guards.StringLiteral.of("INVALID_COMMAND"),
		autoguard.guards.StringLiteral.of("DUPLICATE_REQUESTID")
	),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type INVALID_REQUEST = ReturnType<typeof INVALID_REQUEST["as"]>;

export const MEDIA_STATUS = autoguard.guards.Object.of({
	"requestId": autoguard.guards.Number,
	"type": autoguard.guards.StringLiteral.of("MEDIA_STATUS"),
	"status": autoguard.guards.Array.of(autoguard.guards.Reference.of(() => MediaStatus)),
	"customData": autoguard.guards.Union.of(
		autoguard.guards.Record.of(autoguard.guards.Any),
		autoguard.guards.Undefined
	)
});

export type MEDIA_STATUS = ReturnType<typeof MEDIA_STATUS["as"]>;

export namespace Autoguard {
	export const Guards = {
		"LOAD": autoguard.guards.Reference.of(() => LOAD),
		"PAUSE": autoguard.guards.Reference.of(() => PAUSE),
		"SEEK": autoguard.guards.Reference.of(() => SEEK),
		"STOP": autoguard.guards.Reference.of(() => STOP),
		"PLAY": autoguard.guards.Reference.of(() => PLAY),
		"GET_STATUS": autoguard.guards.Reference.of(() => GET_STATUS),
		"VOLUME": autoguard.guards.Reference.of(() => VOLUME),
		"INVALID_PLAYER_STATE": autoguard.guards.Reference.of(() => INVALID_PLAYER_STATE),
		"LOAD_FAILED": autoguard.guards.Reference.of(() => LOAD_FAILED),
		"LOAD_CANCELLED": autoguard.guards.Reference.of(() => LOAD_CANCELLED),
		"INVALID_REQUEST": autoguard.guards.Reference.of(() => INVALID_REQUEST),
		"MEDIA_STATUS": autoguard.guards.Reference.of(() => MEDIA_STATUS)
	};

	export type Guards = { [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>; };

	export const Requests = {};

	export type Requests = { [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>; };

	export const Responses = {};

	export type Responses = { [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>; };
};
