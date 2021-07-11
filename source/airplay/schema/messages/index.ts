// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard/dist/lib-shared";

export const LoadingEvent = autoguard.guards.Object.of({
	"sessionID": autoguard.guards.Number,
	"state": autoguard.guards.StringLiteral.of("loading")
});

export type LoadingEvent = ReturnType<typeof LoadingEvent["as"]>;

export const PlayingEvent = autoguard.guards.Object.of({
	"sessionID": autoguard.guards.Number,
	"state": autoguard.guards.StringLiteral.of("playing")
});

export type PlayingEvent = ReturnType<typeof PlayingEvent["as"]>;

export const PausedEvent = autoguard.guards.Object.of({
	"sessionID": autoguard.guards.Number,
	"state": autoguard.guards.StringLiteral.of("paused")
});

export type PausedEvent = ReturnType<typeof PausedEvent["as"]>;

export const StoppedEvent = autoguard.guards.Object.of({
	"sessionID": autoguard.guards.Number,
	"state": autoguard.guards.StringLiteral.of("stopped"),
	"reason": autoguard.guards.String
});

export type StoppedEvent = ReturnType<typeof StoppedEvent["as"]>;

export namespace Autoguard {
	export const Guards = {
		"LoadingEvent": autoguard.guards.Reference.of(() => LoadingEvent),
		"PlayingEvent": autoguard.guards.Reference.of(() => PlayingEvent),
		"PausedEvent": autoguard.guards.Reference.of(() => PausedEvent),
		"StoppedEvent": autoguard.guards.Reference.of(() => StoppedEvent)
	};

	export type Guards = { [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>; };

	export const Requests = {};

	export type Requests = { [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>; };

	export const Responses = {};

	export type Responses = { [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>; };
};
