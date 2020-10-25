import * as liburl from "url";
import * as libhttp from "http";
import * as libauth from "./auth";
import * as auth from "./auth";
import * as api_response from "./api_response";
import * as data from "./data";
import * as is from "./is";
import { LexicalSort, NumericSort, CombinedSort } from "./shared";
import { AlbumEntry, ArtistEntry, AudiolistEntry, EpisodeEntry, MovieEntry, PersonEntry, ShowEntry, TrackEntry, UserEntry } from "./database";

function getParameter(url: liburl.UrlWithParsedQuery, key: string): string[] {
	let values = url.query[key] ?? [];
	if (Array.isArray(values)) {
		return values;
	}
	return [values];
}

function getRequiredString(url: liburl.UrlWithParsedQuery, key: string): string {
	let values = getParameter(url, key);
	let value = values.pop();
	if (is.absent(value)) {
		throw `Expected parameter ${key}!`;
	}
	return value;
}

function getOptionalString(url: liburl.UrlWithParsedQuery, key: string): string | undefined {
	try {
		return getRequiredString(url, key);
	} catch (error) {}
}

function getRequiredInteger(url: liburl.UrlWithParsedQuery, key: string): number {
	let value = Number.parseInt(getRequiredString(url, key), 10);
	if (!Number.isInteger(value)) {
		throw `Expected integer ${key}!`;
	}
	return value;
}

function getOptionalInteger(url: liburl.UrlWithParsedQuery, key: string): number | undefined {
	try {
		return getRequiredInteger(url, key);
	} catch (error) {}
}

function getUsername(request: libhttp.IncomingMessage): string {
	var url = liburl.parse(request.url || "/", true);
	return auth.getUsername(url.query.token as string);
}

interface Route<T extends api_response.ApiRequest, U extends api_response.ApiResponse> {
	handlesRequest(request: libhttp.IncomingMessage): boolean;
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void;
}

class Router {
	private routes: Array<Route<api_response.ApiRequest, api_response.ApiResponse>>;

	constructor() {
		this.routes = new Array<Route<api_response.ApiRequest, api_response.ApiResponse>>();
	}

	registerRoute(route: Route<api_response.ApiRequest, api_response.ApiResponse>): this {
		this.routes.push(route);
		return this;
	}

	route(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		for (let route of this.routes) {
			if (route.handlesRequest(request)) {
				return route.handleRequest(request, response);
			}
		}
		response.writeHead(400);
		response.end('{}');
	}
}

class ArtistRoute implements Route<{}, api_response.ArtistResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]artists[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let artist_id = parts[1];
		let artist = data.api_lookupArtist(artist_id, username);
		let appearances = data.lookupAppearances(artist_id).map((album_id) => {
			return data.api_lookupAlbum(album_id, username);
		});
		let payload: api_response.ArtistResponse = {
			artist,
			appearances
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]artists[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class ArtistsRoute implements Route<{}, api_response.ArtistsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]artists[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as ArtistEntry[];
		if (query === "") {
			entries = data.media.audio.artists.slice().sort(LexicalSort.increasing((artist) => artist.title));
		} else {
			entries = data.artistTitleSearchIndex.search(query).map((entry) => entry.value);
		}
		let artists = entries
			.slice(offset, offset + length)
			.map((entry) => {
				return data.api_lookupArtist(entry.artist_id, username);
			});
		let payload: api_response.ArtistsResponse = {
			artists
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]artists[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class AlbumRoute implements Route<{}, api_response.AlbumResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]albums[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let album_id = parts[1];
		let album = data.api_lookupAlbum(album_id, username);
		let payload: api_response.AlbumResponse = {
			album
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]albums[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class AlbumsRoute implements Route<{}, api_response.AlbumsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]albums[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = parts[1];
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as AlbumEntry[];
		if (query === "") {
			entries = data.media.audio.albums.slice().sort(LexicalSort.increasing((album) => album.title));
		} else {
			entries = data.albumTitleSearchIndex.search(query).map((entry) => entry.value);
		}
		let albums = entries
			.slice(offset, offset + length)
			.map((entry) => {
				return data.api_lookupAlbum(entry.album_id, username);
			});
		let payload: api_response.AlbumsResponse = {
			albums
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]albums[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class EpisodeRoute implements Route<api_response.ApiRequest, api_response.EpisodeResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]episodes[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let episode_id = parts[1];
		let episode = data.api_lookupEpisode(episode_id, username);
		let payload: api_response.EpisodeResponse = {
			episode
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]episodes[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class EpisodesRoute implements Route<{}, api_response.EpisodesResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]episodes[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as EpisodeEntry[];
		if (query === "") {
			entries = data.media.video.episodes.slice().sort(LexicalSort.increasing((episode) => episode.title));
		} else {
			entries = data.episodeTitleSearchIndex.search(query).map((entry) => entry.value);
		}
		let episodes = entries
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupEpisode(entry.episode_id, username));
		let payload: api_response.EpisodesResponse = {
			episodes
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]episodes[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class ShowRoute implements Route<{}, api_response.ShowResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]shows[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let show_id = parts[1];
		let show = data.api_lookupShow(show_id, username);
		let payload: api_response.ShowResponse = {
			show
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]shows[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class ShowsRoute implements Route<{}, api_response.ShowsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]shows[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as ShowEntry[];
		if (query === "") {
			entries = data.media.video.shows.slice().sort(LexicalSort.increasing((show) => show.title));
		} else {
			entries = data.showTitleSearchIndex.search(query).map((entry) => entry.value);
		}
		let shows = entries
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupShow(entry.show_id, username));
		let payload: api_response.ShowsResponse = {
			shows
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]shows[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class AuthWithTokenRoute implements Route<api_response.ApiRequest, api_response.AuthWithTokenReponse> {
	constructor() {

	}

	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		if (request.url === undefined) {
			throw new Error();
		}
		let parts = /^[/]api[/]auth[/][?]token[=]([0-9a-f]{64})/.exec(request.url);
		if (parts === null) {
			throw new Error();
		}
		let chunk = parts[1];
		let payload: api_response.AuthWithTokenReponse = {};
		try {
			libauth.getUsername(chunk);
			response.writeHead(200);
			return response.end(JSON.stringify(payload));
		} catch (error) {}
		response.writeHead(401);
		return response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return request.method === 'POST' && request.url !== undefined && /^[/]api[/]auth[/][?]token[=]([0-9a-f]{64})/.test(request.url);
	}
}

class AuthRoute implements Route<api_response.AuthRequest, api_response.AuthResponse> {
	constructor() {

	}

	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		if (request.url === undefined) {
			throw new Error();
		}
		let data = '';
		request.on('data', (chunk) => {
			data += chunk;
		}).on('end', () => {
			try {
				let json = JSON.parse(data);
				if (json == null || json.constructor !== Object) {
					throw new Error();
				}
				if (json.username == null || json.username.constructor !== String) {
					throw new Error();
				}
				if (json.password == null || json.password.constructor !== String) {
					throw new Error();
				}
				let body = json as api_response.AuthRequest;
				let username = body.username;
				let password = body.password;
				let token = libauth.createToken(username, password);
				let payload: api_response.AuthResponse = {
					token
				};
				response.writeHead(200);
				response.end(JSON.stringify(payload));
			} catch (error) {
				response.writeHead(400);
				response.end(JSON.stringify({ error: error.message }));
			}
		});
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return request.method === 'POST' && request.url !== undefined && /^[/]api[/]auth[/]/.test(request.url);
	}
}






















class MovieMovieSuggestionsRoute implements Route<{}, api_response.MovieMovieSuggestionsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]movies[/]([0-9a-f]{32})[/]suggestions[/]movies[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let movie_id = parts[1];
		let genres = data.getVideoGenresFromMovieId(movie_id);
		let map = new Map<string, number>();
		for (let genre of genres) {
			let movie_genres = data.getMoviesFromVideoGenreIdIndex.lookup(genre.video_genre_id);
			for (let movie_genre of movie_genres) {
				let value = map.get(movie_genre.movie_id) ?? 0;
				map.set(movie_genre.movie_id, value + 2);
			}
		}
		for (let entry of map) {
			let video_genres = data.getVideoGenresFromMovieId(entry[0]);
			map.set(entry[0], entry[1] - video_genres.length);
		}
		map.delete(movie_id);
		let movies = Array.from(map.entries())
			.sort(CombinedSort.of(
				NumericSort.decreasing((entry) => entry[1])
			))
			.slice(offset, offset + length)
			.map((entry) => entry[0])
			.map((movie_id) => data.api_lookupMovie(movie_id, username))
		let payload: api_response.MovieMovieSuggestionsResponse = {
			movies
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]movies[/]([0-9a-f]{32})[/]suggestions[/]movies[/]/.test(request.url ?? "/");
	}
}





class MovieRoute implements Route<{}, api_response.MovieResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]movies[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let movie_id = parts[1];
		let movie = data.api_lookupMovie(movie_id, username);
		let payload: api_response.MovieResponse = {
			movie
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]movies[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class MoviesRoute implements Route<{}, api_response.MoviesResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]movies[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as MovieEntry[];
		if (query === "") {
			entries = data.media.video.movies.slice().sort(LexicalSort.increasing((movie) => movie.title));
		} else {
			entries = data.movieTitleSearchIndex.search(query).map((entry) => entry.value);
		}
		let movies = entries
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupMovie(entry.movie_id, username));
		let payload: api_response.MoviesResponse = {
			movies
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]movies[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class PlaylistRoute implements Route<{}, api_response.PlaylistResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]playlists[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let playlist_id = parts[1];
		let playlist = data.api_lookupPlaylist(playlist_id, username);
		let payload: api_response.PlaylistResponse = {
			playlist
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]playlists[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class PlaylistsRoute implements Route<{}, api_response.PlaylistsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]playlists[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as AudiolistEntry[];
		if (query === "") {
			entries = data.lists.audiolists.slice().sort(LexicalSort.increasing((playlist) => playlist.title));
		} else {
			entries = data.playlistTitleSearchIndex.search(query).map((entry) => entry.value);
		}
		let playlists = entries
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupPlaylist(entry.audiolist_id, username));
		let payload: api_response.PlaylistsResponse = {
			playlists
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]playlists[/]([^/?]*)/.test(request.url ?? "/");
	}
}













class CuesRoute implements Route<{}, api_response.CuesResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]cues[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let cues = data.searchForCues(query, username, offset, length)
			.map((cue) => {
				let entry = data.getSubtitleFromSubtitleId.lookup(cue.subtitle.subtitle_id);
				try {
					let episode = data.getEpisodeFromFileId.lookup(entry.video_file_id);
					return {
						...cue,
						media: data.api_lookupEpisode(episode.episode_id, username)
					}
				} catch (error) {}
				try {
					let movie = data.getMoviePartFromFileId.lookup(entry.video_file_id);
					return {
						...cue,
						media: data.api_lookupMovie(movie.movie_id, username)
					}
				} catch (error) {}
			})
			.filter(is.present);
		let payload: api_response.CuesResponse = {
			cues
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]cues[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class GenresRoute implements Route<{}, api_response.GenresResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]genres[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let genres = data.media.video.genres.map((genre) => {
			return data.api_lookupGenre(genre.video_genre_id, username);
		});
		let payload: api_response.GenresResponse = {
			genres
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]genres[/]/.test(request.url ?? "/");
	}
}

class GenreShowsRoute implements Route<{}, api_response.GenreShowsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]genres[/]([0-9a-f]{32})[/]shows[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let genre_id = parts[1];
		let shows = data.getShowsFromVideoGenreId(genre_id, username, offset, length);
		let payload: api_response.GenreShowsResponse = {
			shows
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]genres[/]([0-9a-f]{32})[/]shows[/]/.test(request.url ?? "/");
	}
}

class GenreMoviesRoute implements Route<{}, api_response.GenreMoviesResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]genres[/]([0-9a-f]{32})[/]movies[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let genre_id = parts[1];
		let movies = data.getMoviesFromVideoGenreId(genre_id, username, offset, length);
		let payload: api_response.GenreMoviesResponse = {
			movies
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]genres[/]([0-9a-f]{32})[/]movies[/]/.test(request.url ?? "/");
	}
}

class GenreRoute implements Route<{}, api_response.GenreResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]genres[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let genre_id = parts[1];
		let genre = data.api_lookupGenre(genre_id, username);
		let payload: api_response.GenreResponse = {
			genre
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]genres[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class SearchRoute implements Route<{}, api_response.SearchResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]search[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entities = data.search(query, username, offset, length);
		let payload: api_response.SearchResponse = {
			entities
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]search[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class TokensRoute implements Route<api_response.TokensRequest, api_response.TokensResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let tokens = data.getTokensFromUsername(username);
		let payload: api_response.TokensResponse = {
			tokens
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return request.method === "POST" && /^[/]api[/]tokens[/]/.test(request.url || "/");
	}
}

class TrackRoute implements Route<{}, api_response.TrackResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]tracks[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let track_id = parts[1];
		let track = data.api_lookupTrack(track_id, username);
		let payload: api_response.TrackResponse = {
			track
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]tracks[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class TracksRoute implements Route<{}, api_response.TracksResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]tracks[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as TrackEntry[];
		if (query === "") {
			entries = data.media.audio.tracks.slice().sort(LexicalSort.increasing((track) => track.title));
		} else {
			entries = data.trackTitleSearchIndex.search(query).map((entry) => entry.value);
		}
		let tracks = entries
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupTrack(entry.track_id, username));
		let payload: api_response.TracksResponse = {
			tracks
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]tracks[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class SeasonRoute implements Route<{}, api_response.SeasonResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]seasons[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let season_id = parts[1];
		let season = data.api_lookupSeason(season_id, username);
		let payload: api_response.SeasonResponse = {
			season
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]seasons[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class SeasonsRoute implements Route<{}, api_response.SeasonsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]video[/]seasons[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let seasons = data.media.video.seasons
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupSeason(entry.season_id, username));
		let payload: api_response.SeasonsResponse = {
			seasons
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]video[/]seasons[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class DiscRoute implements Route<{}, api_response.DiscResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]discs[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let season_id = parts[1];
		let disc = data.api_lookupDisc(season_id, username);
		let payload: api_response.DiscResponse = {
			disc
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]discs[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class DiscsRoute implements Route<{}, api_response.SeasonsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]audio[/]discs[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let discs = data.media.audio.discs
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupDisc(entry.disc_id, username));
		let payload: api_response.DiscsResponse = {
			discs
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]audio[/]discs[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class UserRoute implements Route<{}, api_response.UserResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]users[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let user_id = parts[1];
		let user = data.api_lookupUser(user_id);
		let payload: api_response.UserResponse = {
			user
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]users[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class UsersRoute implements Route<{}, api_response.UsersResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]users[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as UserEntry[];
		if (query === "") {
			entries = data.users.users.slice().sort(LexicalSort.increasing((user) => user.name));
		} else {
			entries = data.userUsernameSearchIndex.search(query).map((entry) => entry.value);
		}
		let users = entries
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupUser(entry.user_id));
		let payload: api_response.UsersResponse = {
			users
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]users[/]([^/?]*)/.test(request.url ?? "/");
	}
}

class PersonRoute implements Route<{}, api_response.PersonResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]persons[/]([0-9a-f]{32})[/]/.exec(request.url ?? "/") as RegExpExecArray;
		let person_id = parts[1];
		let person = data.api_lookupPerson(person_id, username);
		let shows = data.getShowsFromPersonId(person_id, username, 0, 24);
		let movies = data.getMoviesFromPersonId(person_id, username, 0, 24);
		let payload: api_response.PersonResponse = {
			person,
			shows,
			movies
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]persons[/]([0-9a-f]{32})[/]/.test(request.url ?? "/");
	}
}

class PersonsRoute implements Route<{}, api_response.PersonsResponse> {
	handleRequest(request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void {
		let username = getUsername(request);
		let parts = /^[/]api[/]persons[/]([^/?]*)/.exec(request.url ?? "/") as RegExpExecArray;
		let query = decodeURIComponent(parts[1]);
		let url = liburl.parse(request.url ?? "/", true);
		let offset = getOptionalInteger(url, "offset") ?? 0;
		let length = getOptionalInteger(url, "length") ?? 24;
		let entries = [] as PersonEntry[];
		if (query === "") {
			entries = data.media.persons.slice().sort(LexicalSort.increasing((person) => person.name));
		} else {
			entries = data.personSearchIndex.search(query).map((entry) => entry.value);
		}
		let persons = entries
			.slice(offset, offset + length)
			.map((entry) => data.api_lookupPerson(entry.person_id, username));
		let payload: api_response.PersonsResponse = {
			persons
		};
		response.writeHead(200);
		response.end(JSON.stringify(payload));
	}

	handlesRequest(request: libhttp.IncomingMessage): boolean {
		return /^[/]api[/]persons[/]([^/?]*)/.test(request.url ?? "/");
	}
}

let router = new Router()
	.registerRoute(new AuthWithTokenRoute())
	.registerRoute(new AuthRoute())
	.registerRoute(new MovieMovieSuggestionsRoute())
	.registerRoute(new MovieRoute())
	.registerRoute(new MoviesRoute())
	.registerRoute(new ArtistRoute())
	.registerRoute(new ArtistsRoute())
	.registerRoute(new AlbumRoute())
	.registerRoute(new AlbumsRoute())
	.registerRoute(new EpisodeRoute())
	.registerRoute(new EpisodesRoute())
	.registerRoute(new ShowRoute())
	.registerRoute(new ShowsRoute())
	.registerRoute(new PersonRoute())
	.registerRoute(new PersonsRoute())
	.registerRoute(new PlaylistRoute())
	.registerRoute(new PlaylistsRoute())
	.registerRoute(new TrackRoute())
	.registerRoute(new TracksRoute())
	.registerRoute(new SeasonRoute())
	.registerRoute(new SeasonsRoute())
	.registerRoute(new DiscRoute())
	.registerRoute(new DiscsRoute())
	.registerRoute(new UserRoute())
	.registerRoute(new UsersRoute())

	.registerRoute(new CuesRoute())
	.registerRoute(new GenreShowsRoute())
	.registerRoute(new GenreMoviesRoute())
	.registerRoute(new GenreRoute())
	.registerRoute(new GenresRoute())
	.registerRoute(new SearchRoute())
	.registerRoute(new TokensRoute());

let handleRequest = (request: libhttp.IncomingMessage, response: libhttp.ServerResponse): void => {
	try {
		router.route(request, response);
	} catch (error) {
		response.writeHead(500);
		response.end(JSON.stringify({ error: "" + error }));
	}
};

export {
	handleRequest
};
