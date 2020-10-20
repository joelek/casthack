// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import { guards as autoguard } from "@joelek/ts-autoguard";
import { Album, Artist, Track, Playlist, Movie, Show, Season, Episode } from "../../api/schema/objects";

export type ContextAlbum = Album;

export const ContextAlbum = autoguard.Reference.of<Album>(() => Album);

export type ContextArtist = Artist;

export const ContextArtist = autoguard.Reference.of<Artist>(() => Artist);

export type ContextTrack = Track;

export const ContextTrack = autoguard.Reference.of<Track>(() => Track);

export type ContextPlaylist = Playlist;

export const ContextPlaylist = autoguard.Reference.of<Playlist>(() => Playlist);

export type ContextMovie = Movie;

export const ContextMovie = autoguard.Reference.of<Movie>(() => Movie);

export type ContextShow = Show;

export const ContextShow = autoguard.Reference.of<Show>(() => Show);

export type ContextSeason = Season;

export const ContextSeason = autoguard.Reference.of<Season>(() => Season);

export type ContextEpisode = Episode;

export const ContextEpisode = autoguard.Reference.of<Episode>(() => Episode);

export type Context = ContextAlbum | ContextArtist | ContextTrack | ContextPlaylist | ContextMovie | ContextShow | ContextSeason | ContextEpisode;

export const Context = autoguard.Union.of(
	autoguard.Reference.of<ContextAlbum>(() => ContextAlbum),
	autoguard.Reference.of<ContextArtist>(() => ContextArtist),
	autoguard.Reference.of<ContextTrack>(() => ContextTrack),
	autoguard.Reference.of<ContextPlaylist>(() => ContextPlaylist),
	autoguard.Reference.of<ContextMovie>(() => ContextMovie),
	autoguard.Reference.of<ContextShow>(() => ContextShow),
	autoguard.Reference.of<ContextSeason>(() => ContextSeason),
	autoguard.Reference.of<ContextEpisode>(() => ContextEpisode)
);

export type ContextItem = ContextTrack | ContextMovie | ContextEpisode;

export const ContextItem = autoguard.Union.of(
	autoguard.Reference.of<ContextTrack>(() => ContextTrack),
	autoguard.Reference.of<ContextMovie>(() => ContextMovie),
	autoguard.Reference.of<ContextEpisode>(() => ContextEpisode)
);

export type Device = {
	"id": string,
	"type": string,
	"name": string
};

export const Device = autoguard.Object.of<Device>({
	"id": autoguard.String,
	"type": autoguard.String,
	"name": autoguard.String
});

export type Session = {
	"context"?: Context,
	"device"?: Device,
	"index"?: number,
	"playback": boolean,
	"progress"?: number
};

export const Session = autoguard.Object.of<Session>({
	"context": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Reference.of<Context>(() => Context)
	),
	"device": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Reference.of<Device>(() => Device)
	),
	"index": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Number
	),
	"playback": autoguard.Boolean,
	"progress": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Number
	)
});

export type Autoguard = {
	"ContextAlbum": ContextAlbum,
	"ContextArtist": ContextArtist,
	"ContextTrack": ContextTrack,
	"ContextPlaylist": ContextPlaylist,
	"ContextMovie": ContextMovie,
	"ContextShow": ContextShow,
	"ContextSeason": ContextSeason,
	"ContextEpisode": ContextEpisode,
	"Context": Context,
	"ContextItem": ContextItem,
	"Device": Device,
	"Session": Session
};

export const Autoguard = {
	"ContextAlbum": ContextAlbum,
	"ContextArtist": ContextArtist,
	"ContextTrack": ContextTrack,
	"ContextPlaylist": ContextPlaylist,
	"ContextMovie": ContextMovie,
	"ContextShow": ContextShow,
	"ContextSeason": ContextSeason,
	"ContextEpisode": ContextEpisode,
	"Context": Context,
	"ContextItem": ContextItem,
	"Device": Device,
	"Session": Session
};
