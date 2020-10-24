// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import { guards as autoguard } from "@joelek/ts-autoguard";

export type ArtistBase = {
	"artist_id": string,
	"title": string
};

export const ArtistBase = autoguard.Object.of<ArtistBase>({
	"artist_id": autoguard.String,
	"title": autoguard.String
});

export type Artist = ArtistBase & {
	"albums": Album[]
};

export const Artist = autoguard.Intersection.of(
	autoguard.Reference.of<ArtistBase>(() => ArtistBase),
	autoguard.Object.of<{
		"albums": Album[]
	}>({
		"albums": autoguard.Array.of(autoguard.Reference.of<Album>(() => Album))
	})
);

export type AlbumBase = {
	"album_id": string,
	"title": string,
	"year": number,
	"artists": ArtistBase[],
	"artwork"?: ImageFile
};

export const AlbumBase = autoguard.Object.of<AlbumBase>({
	"album_id": autoguard.String,
	"title": autoguard.String,
	"year": autoguard.Number,
	"artists": autoguard.Array.of(autoguard.Reference.of<ArtistBase>(() => ArtistBase)),
	"artwork": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Reference.of<ImageFile>(() => ImageFile)
	)
});

export type Album = AlbumBase & {
	"discs": Disc[]
};

export const Album = autoguard.Intersection.of(
	autoguard.Reference.of<AlbumBase>(() => AlbumBase),
	autoguard.Object.of<{
		"discs": Disc[]
	}>({
		"discs": autoguard.Array.of(autoguard.Reference.of<Disc>(() => Disc))
	})
);

export type DiscBase = {
	"disc_id": string,
	"album": AlbumBase,
	"number": number
};

export const DiscBase = autoguard.Object.of<DiscBase>({
	"disc_id": autoguard.String,
	"album": autoguard.Reference.of<AlbumBase>(() => AlbumBase),
	"number": autoguard.Number
});

export type Disc = DiscBase & {
	"tracks": Track[]
};

export const Disc = autoguard.Intersection.of(
	autoguard.Reference.of<DiscBase>(() => DiscBase),
	autoguard.Object.of<{
		"tracks": Track[]
	}>({
		"tracks": autoguard.Array.of(autoguard.Reference.of<Track>(() => Track))
	})
);

export type TrackBase = {
	"track_id": string,
	"title": string,
	"disc": DiscBase,
	"artists": ArtistBase[],
	"number": number,
	"last_stream_date"?: number
};

export const TrackBase = autoguard.Object.of<TrackBase>({
	"track_id": autoguard.String,
	"title": autoguard.String,
	"disc": autoguard.Reference.of<DiscBase>(() => DiscBase),
	"artists": autoguard.Array.of(autoguard.Reference.of<ArtistBase>(() => ArtistBase)),
	"number": autoguard.Number,
	"last_stream_date": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Number
	)
});

export type Track = TrackBase & {
	"segment": {
		"file": AudioFile
	}
};

export const Track = autoguard.Intersection.of(
	autoguard.Reference.of<TrackBase>(() => TrackBase),
	autoguard.Object.of<{
		"segment": {
			"file": AudioFile
		}
	}>({
		"segment": autoguard.Object.of<{
			"file": AudioFile
		}>({
			"file": autoguard.Reference.of<AudioFile>(() => AudioFile)
		})
	})
);

export type UserBase = {
	"user_id": string,
	"name": string,
	"username": string
};

export const UserBase = autoguard.Object.of<UserBase>({
	"user_id": autoguard.String,
	"name": autoguard.String,
	"username": autoguard.String
});

export type User = UserBase & {};

export const User = autoguard.Intersection.of(
	autoguard.Reference.of<UserBase>(() => UserBase),
	autoguard.Object.of<{}>({})
);

export type PlaylistBase = {
	"playlist_id": string,
	"title": string,
	"description": string,
	"user": UserBase
};

export const PlaylistBase = autoguard.Object.of<PlaylistBase>({
	"playlist_id": autoguard.String,
	"title": autoguard.String,
	"description": autoguard.String,
	"user": autoguard.Reference.of<UserBase>(() => UserBase)
});

export type Playlist = PlaylistBase & {
	"items": PlaylistItem[]
};

export const Playlist = autoguard.Intersection.of(
	autoguard.Reference.of<PlaylistBase>(() => PlaylistBase),
	autoguard.Object.of<{
		"items": PlaylistItem[]
	}>({
		"items": autoguard.Array.of(autoguard.Reference.of<PlaylistItem>(() => PlaylistItem))
	})
);

export type PlaylistItemBase = {
	"number": number,
	"playlist": PlaylistBase,
	"track": Track
};

export const PlaylistItemBase = autoguard.Object.of<PlaylistItemBase>({
	"number": autoguard.Number,
	"playlist": autoguard.Reference.of<PlaylistBase>(() => PlaylistBase),
	"track": autoguard.Reference.of<Track>(() => Track)
});

export type PlaylistItem = PlaylistItemBase & {};

export const PlaylistItem = autoguard.Intersection.of(
	autoguard.Reference.of<PlaylistItemBase>(() => PlaylistItemBase),
	autoguard.Object.of<{}>({})
);

export type GenreBase = {
	"genre_id": string,
	"title": string
};

export const GenreBase = autoguard.Object.of<GenreBase>({
	"genre_id": autoguard.String,
	"title": autoguard.String
});

export type Genre = GenreBase & {};

export const Genre = autoguard.Intersection.of(
	autoguard.Reference.of<GenreBase>(() => GenreBase),
	autoguard.Object.of<{}>({})
);

export type SegmentBase = {
	"file": VideoFile,
	"subtitles": Subtitle[]
};

export const SegmentBase = autoguard.Object.of<SegmentBase>({
	"file": autoguard.Reference.of<VideoFile>(() => VideoFile),
	"subtitles": autoguard.Array.of(autoguard.Reference.of<Subtitle>(() => Subtitle))
});

export type Segment = SegmentBase & {};

export const Segment = autoguard.Intersection.of(
	autoguard.Reference.of<SegmentBase>(() => SegmentBase),
	autoguard.Object.of<{}>({})
);

export type MovieBase = {
	"movie_id": string,
	"title": string,
	"year": number,
	"summary": string,
	"artwork"?: ImageFile,
	"last_stream_date"?: number,
	"genres": Genre[]
};

export const MovieBase = autoguard.Object.of<MovieBase>({
	"movie_id": autoguard.String,
	"title": autoguard.String,
	"year": autoguard.Number,
	"summary": autoguard.String,
	"artwork": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Reference.of<ImageFile>(() => ImageFile)
	),
	"last_stream_date": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Number
	),
	"genres": autoguard.Array.of(autoguard.Reference.of<Genre>(() => Genre))
});

export type Movie = MovieBase & {
	"segment": Segment
};

export const Movie = autoguard.Intersection.of(
	autoguard.Reference.of<MovieBase>(() => MovieBase),
	autoguard.Object.of<{
		"segment": Segment
	}>({
		"segment": autoguard.Reference.of<Segment>(() => Segment)
	})
);

export type ShowBase = {
	"show_id": string,
	"title": string,
	"artwork"?: ImageFile,
	"genres": Genre[]
};

export const ShowBase = autoguard.Object.of<ShowBase>({
	"show_id": autoguard.String,
	"title": autoguard.String,
	"artwork": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Reference.of<ImageFile>(() => ImageFile)
	),
	"genres": autoguard.Array.of(autoguard.Reference.of<Genre>(() => Genre))
});

export type Show = ShowBase & {
	"seasons": Season[]
};

export const Show = autoguard.Intersection.of(
	autoguard.Reference.of<ShowBase>(() => ShowBase),
	autoguard.Object.of<{
		"seasons": Season[]
	}>({
		"seasons": autoguard.Array.of(autoguard.Reference.of<Season>(() => Season))
	})
);

export type SeasonBase = {
	"season_id": string,
	"number": number,
	"show": ShowBase
};

export const SeasonBase = autoguard.Object.of<SeasonBase>({
	"season_id": autoguard.String,
	"number": autoguard.Number,
	"show": autoguard.Reference.of<ShowBase>(() => ShowBase)
});

export type Season = SeasonBase & {
	"episodes": Episode[]
};

export const Season = autoguard.Intersection.of(
	autoguard.Reference.of<SeasonBase>(() => SeasonBase),
	autoguard.Object.of<{
		"episodes": Episode[]
	}>({
		"episodes": autoguard.Array.of(autoguard.Reference.of<Episode>(() => Episode))
	})
);

export type EpisodeBase = {
	"episode_id": string,
	"title": string,
	"summary": string,
	"number": number,
	"season": SeasonBase,
	"year"?: number,
	"last_stream_date"?: number
};

export const EpisodeBase = autoguard.Object.of<EpisodeBase>({
	"episode_id": autoguard.String,
	"title": autoguard.String,
	"summary": autoguard.String,
	"number": autoguard.Number,
	"season": autoguard.Reference.of<SeasonBase>(() => SeasonBase),
	"year": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Number
	),
	"last_stream_date": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.Number
	)
});

export type Episode = EpisodeBase & {
	"segment": Segment
};

export const Episode = autoguard.Intersection.of(
	autoguard.Reference.of<EpisodeBase>(() => EpisodeBase),
	autoguard.Object.of<{
		"segment": Segment
	}>({
		"segment": autoguard.Reference.of<Segment>(() => Segment)
	})
);

export type SubtitleBase = {
	"subtitle_id": string,
	"file": SubtitleFile,
	"language"?: string
};

export const SubtitleBase = autoguard.Object.of<SubtitleBase>({
	"subtitle_id": autoguard.String,
	"file": autoguard.Reference.of<SubtitleFile>(() => SubtitleFile),
	"language": autoguard.Union.of(
		autoguard.Undefined,
		autoguard.String
	)
});

export type Subtitle = SubtitleBase & {
	"cues": Cue[]
};

export const Subtitle = autoguard.Intersection.of(
	autoguard.Reference.of<SubtitleBase>(() => SubtitleBase),
	autoguard.Object.of<{
		"cues": Cue[]
	}>({
		"cues": autoguard.Array.of(autoguard.Reference.of<Cue>(() => Cue))
	})
);

export type CueBase = {
	"cue_id": string,
	"subtitle": SubtitleBase,
	"start_ms": number,
	"duration_ms": number,
	"lines": string[]
};

export const CueBase = autoguard.Object.of<CueBase>({
	"cue_id": autoguard.String,
	"subtitle": autoguard.Reference.of<SubtitleBase>(() => SubtitleBase),
	"start_ms": autoguard.Number,
	"duration_ms": autoguard.Number,
	"lines": autoguard.Array.of(autoguard.String)
});

export type Cue = CueBase & {};

export const Cue = autoguard.Intersection.of(
	autoguard.Reference.of<CueBase>(() => CueBase),
	autoguard.Object.of<{}>({})
);

export type Entity = Album | Artist | Disc | Episode | Genre | Movie | Season | Show | Track | Playlist | User;

export const Entity = autoguard.Union.of(
	autoguard.Reference.of<Album>(() => Album),
	autoguard.Reference.of<Artist>(() => Artist),
	autoguard.Reference.of<Disc>(() => Disc),
	autoguard.Reference.of<Episode>(() => Episode),
	autoguard.Reference.of<Genre>(() => Genre),
	autoguard.Reference.of<Movie>(() => Movie),
	autoguard.Reference.of<Season>(() => Season),
	autoguard.Reference.of<Show>(() => Show),
	autoguard.Reference.of<Track>(() => Track),
	autoguard.Reference.of<Playlist>(() => Playlist),
	autoguard.Reference.of<User>(() => User)
);

export type File = {
	"file_id": string,
	"mime": string
};

export const File = autoguard.Object.of<File>({
	"file_id": autoguard.String,
	"mime": autoguard.String
});

export type AudioFile = File & {
	"duration_ms": number
};

export const AudioFile = autoguard.Intersection.of(
	autoguard.Reference.of<File>(() => File),
	autoguard.Object.of<{
		"duration_ms": number
	}>({
		"duration_ms": autoguard.Number
	})
);

export type ImageFile = File & {
	"height": number,
	"width": number
};

export const ImageFile = autoguard.Intersection.of(
	autoguard.Reference.of<File>(() => File),
	autoguard.Object.of<{
		"height": number,
		"width": number
	}>({
		"height": autoguard.Number,
		"width": autoguard.Number
	})
);

export type SubtitleFile = File & {};

export const SubtitleFile = autoguard.Intersection.of(
	autoguard.Reference.of<File>(() => File),
	autoguard.Object.of<{}>({})
);

export type VideoFile = File & {
	"duration_ms": number,
	"height": number,
	"width": number
};

export const VideoFile = autoguard.Intersection.of(
	autoguard.Reference.of<File>(() => File),
	autoguard.Object.of<{
		"duration_ms": number,
		"height": number,
		"width": number
	}>({
		"duration_ms": autoguard.Number,
		"height": autoguard.Number,
		"width": autoguard.Number
	})
);

export type Autoguard = {
	"ArtistBase": ArtistBase,
	"Artist": Artist,
	"AlbumBase": AlbumBase,
	"Album": Album,
	"DiscBase": DiscBase,
	"Disc": Disc,
	"TrackBase": TrackBase,
	"Track": Track,
	"UserBase": UserBase,
	"User": User,
	"PlaylistBase": PlaylistBase,
	"Playlist": Playlist,
	"PlaylistItemBase": PlaylistItemBase,
	"PlaylistItem": PlaylistItem,
	"GenreBase": GenreBase,
	"Genre": Genre,
	"SegmentBase": SegmentBase,
	"Segment": Segment,
	"MovieBase": MovieBase,
	"Movie": Movie,
	"ShowBase": ShowBase,
	"Show": Show,
	"SeasonBase": SeasonBase,
	"Season": Season,
	"EpisodeBase": EpisodeBase,
	"Episode": Episode,
	"SubtitleBase": SubtitleBase,
	"Subtitle": Subtitle,
	"CueBase": CueBase,
	"Cue": Cue,
	"Entity": Entity,
	"File": File,
	"AudioFile": AudioFile,
	"ImageFile": ImageFile,
	"SubtitleFile": SubtitleFile,
	"VideoFile": VideoFile
};

export const Autoguard = {
	"ArtistBase": ArtistBase,
	"Artist": Artist,
	"AlbumBase": AlbumBase,
	"Album": Album,
	"DiscBase": DiscBase,
	"Disc": Disc,
	"TrackBase": TrackBase,
	"Track": Track,
	"UserBase": UserBase,
	"User": User,
	"PlaylistBase": PlaylistBase,
	"Playlist": Playlist,
	"PlaylistItemBase": PlaylistItemBase,
	"PlaylistItem": PlaylistItem,
	"GenreBase": GenreBase,
	"Genre": Genre,
	"SegmentBase": SegmentBase,
	"Segment": Segment,
	"MovieBase": MovieBase,
	"Movie": Movie,
	"ShowBase": ShowBase,
	"Show": Show,
	"SeasonBase": SeasonBase,
	"Season": Season,
	"EpisodeBase": EpisodeBase,
	"Episode": Episode,
	"SubtitleBase": SubtitleBase,
	"Subtitle": Subtitle,
	"CueBase": CueBase,
	"Cue": Cue,
	"Entity": Entity,
	"File": File,
	"AudioFile": AudioFile,
	"ImageFile": ImageFile,
	"SubtitleFile": SubtitleFile,
	"VideoFile": VideoFile
};
