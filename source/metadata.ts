// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import { guards as autoguard } from "@joelek/ts-autoguard";

export type EpisodeMetadata = {
	"type": "episode",
	"imdb": string,
	"title": string,
	"year": number,
	"summary": string,
	"show": {
		"imdb": string,
		"title": string,
		"genres": string[]
	},
	"season": number,
	"episode": number
};

export const EpisodeMetadata = autoguard.Object.of({
	"type": autoguard.StringLiteral.of("episode"),
	"imdb": autoguard.String,
	"title": autoguard.String,
	"year": autoguard.Number,
	"summary": autoguard.String,
	"show": autoguard.Object.of({
		"imdb": autoguard.String,
		"title": autoguard.String,
		"genres": autoguard.Array.of(autoguard.String)
	}, {}),
	"season": autoguard.Number,
	"episode": autoguard.Number
}, {});

export type MovieMetadata = {
	"type": "movie",
	"imdb": string,
	"title": string,
	"year": number,
	"summary": string,
	"genres": string[]
};

export const MovieMetadata = autoguard.Object.of({
	"type": autoguard.StringLiteral.of("movie"),
	"imdb": autoguard.String,
	"title": autoguard.String,
	"year": autoguard.Number,
	"summary": autoguard.String,
	"genres": autoguard.Array.of(autoguard.String)
}, {});

export type Autoguard = {
	"EpisodeMetadata": EpisodeMetadata,
	"MovieMetadata": MovieMetadata
};

export const Autoguard = {
	"EpisodeMetadata": EpisodeMetadata,
	"MovieMetadata": MovieMetadata
};
