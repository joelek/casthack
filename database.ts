// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

export type ArtistEntry = {
	artist_id: string,
	title: string
};

export const ArtistEntry = {
	as(subject: any, path: string = ""): ArtistEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.artist_id, path + "." + "artist_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.title, path + "." + "title");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is ArtistEntry {
		try {
			ArtistEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type AlbumEntry = {
	album_id: string,
	title: string,
	year: number,
	cover_file_id: (string | null)
};

export const AlbumEntry = {
	as(subject: any, path: string = ""): AlbumEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.album_id, path + "." + "album_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.title, path + "." + "title");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.year, path + "." + "year");
				((subject, path) => {
					try {
						return ((subject, path) => {
							if ((subject != null) && (subject.constructor === String)) {
								return subject;
							}
							throw "Type guard \"String\" failed at \"" + path + "\"!";
						})(subject, path);
					} catch (error) {}
					try {
						return ((subject, path) => {
							if (subject === null) {
								return subject;
							}
							throw "Type guard \"Null\" failed at \"" + path + "\"!";
						})(subject, path);
					} catch (error) {}
					throw "Type guard \"Union\" failed at \"" + path + "\"!";
				})(subject.cover_file_id, path + "." + "cover_file_id");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is AlbumEntry {
		try {
			AlbumEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type DiscEntry = {
	disc_id: string,
	album_id: string,
	number: number
};

export const DiscEntry = {
	as(subject: any, path: string = ""): DiscEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.disc_id, path + "." + "disc_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.album_id, path + "." + "album_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.number, path + "." + "number");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is DiscEntry {
		try {
			DiscEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type TrackEntry = {
	track_id: string,
	disc_id: string,
	file_id: string,
	title: string,
	number: number,
	duration: number
};

export const TrackEntry = {
	as(subject: any, path: string = ""): TrackEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.track_id, path + "." + "track_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.disc_id, path + "." + "disc_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.file_id, path + "." + "file_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.title, path + "." + "title");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.number, path + "." + "number");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.duration, path + "." + "duration");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is TrackEntry {
		try {
			TrackEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type AlbumArtistEntry = {
	album_id: string,
	artist_id: string
};

export const AlbumArtistEntry = {
	as(subject: any, path: string = ""): AlbumArtistEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.album_id, path + "." + "album_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.artist_id, path + "." + "artist_id");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is AlbumArtistEntry {
		try {
			AlbumArtistEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type TrackArtistEntry = {
	track_id: string,
	artist_id: string
};

export const TrackArtistEntry = {
	as(subject: any, path: string = ""): TrackArtistEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.track_id, path + "." + "track_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.artist_id, path + "." + "artist_id");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is TrackArtistEntry {
		try {
			TrackArtistEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type MovieEntry = {
	movie_id: string,
	file_id: string,
	title: string,
	year: number,
	duration: number
};

export const MovieEntry = {
	as(subject: any, path: string = ""): MovieEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.movie_id, path + "." + "movie_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.file_id, path + "." + "file_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.title, path + "." + "title");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.year, path + "." + "year");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.duration, path + "." + "duration");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is MovieEntry {
		try {
			MovieEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type ShowEntry = {
	show_id: string,
	title: string
};

export const ShowEntry = {
	as(subject: any, path: string = ""): ShowEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.show_id, path + "." + "show_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.title, path + "." + "title");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is ShowEntry {
		try {
			ShowEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type SeasonEntry = {
	season_id: string,
	show_id: string,
	number: number
};

export const SeasonEntry = {
	as(subject: any, path: string = ""): SeasonEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.season_id, path + "." + "season_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.show_id, path + "." + "show_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.number, path + "." + "number");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is SeasonEntry {
		try {
			SeasonEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type EpisodeEntry = {
	episode_id: string,
	season_id: string,
	file_id: string,
	title: string,
	number: number,
	duration: number
};

export const EpisodeEntry = {
	as(subject: any, path: string = ""): EpisodeEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.episode_id, path + "." + "episode_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.season_id, path + "." + "season_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.file_id, path + "." + "file_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.title, path + "." + "title");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.number, path + "." + "number");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.duration, path + "." + "duration");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is EpisodeEntry {
		try {
			EpisodeEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type SubtitleEntry = {
	subtitle_id: string,
	episode_id: (string | null),
	movie_id: (string | null),
	file_id: string,
	language: (string | null)
};

export const SubtitleEntry = {
	as(subject: any, path: string = ""): SubtitleEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.subtitle_id, path + "." + "subtitle_id");
				((subject, path) => {
					try {
						return ((subject, path) => {
							if ((subject != null) && (subject.constructor === String)) {
								return subject;
							}
							throw "Type guard \"String\" failed at \"" + path + "\"!";
						})(subject, path);
					} catch (error) {}
					try {
						return ((subject, path) => {
							if (subject === null) {
								return subject;
							}
							throw "Type guard \"Null\" failed at \"" + path + "\"!";
						})(subject, path);
					} catch (error) {}
					throw "Type guard \"Union\" failed at \"" + path + "\"!";
				})(subject.episode_id, path + "." + "episode_id");
				((subject, path) => {
					try {
						return ((subject, path) => {
							if ((subject != null) && (subject.constructor === String)) {
								return subject;
							}
							throw "Type guard \"String\" failed at \"" + path + "\"!";
						})(subject, path);
					} catch (error) {}
					try {
						return ((subject, path) => {
							if (subject === null) {
								return subject;
							}
							throw "Type guard \"Null\" failed at \"" + path + "\"!";
						})(subject, path);
					} catch (error) {}
					throw "Type guard \"Union\" failed at \"" + path + "\"!";
				})(subject.movie_id, path + "." + "movie_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.file_id, path + "." + "file_id");
				((subject, path) => {
					try {
						return ((subject, path) => {
							if ((subject != null) && (subject.constructor === String)) {
								return subject;
							}
							throw "Type guard \"String\" failed at \"" + path + "\"!";
						})(subject, path);
					} catch (error) {}
					try {
						return ((subject, path) => {
							if (subject === null) {
								return subject;
							}
							throw "Type guard \"Null\" failed at \"" + path + "\"!";
						})(subject, path);
					} catch (error) {}
					throw "Type guard \"Union\" failed at \"" + path + "\"!";
				})(subject.language, path + "." + "language");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is SubtitleEntry {
		try {
			SubtitleEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type CueEntry = {
	cue_id: string,
	subtitle_id: string,
	start_ms: number,
	duration_ms: number,
	lines: string[]
};

export const CueEntry = {
	as(subject: any, path: string = ""): CueEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.cue_id, path + "." + "cue_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.subtitle_id, path + "." + "subtitle_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.start_ms, path + "." + "start_ms");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.duration_ms, path + "." + "duration_ms");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Array)) {
						for (let i = 0; i < subject.length; i++) {
							((subject, path) => {
								if ((subject != null) && (subject.constructor === String)) {
									return subject;
								}
								throw "Type guard \"String\" failed at \"" + path + "\"!";
							})(subject[i], path + "[" + i + "]");
						}
						return subject;
					}
					throw "Type guard \"Array\" failed at \"" + path + "\"!";
				})(subject.lines, path + "." + "lines");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is CueEntry {
		try {
			CueEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type FileEntry = {
	file_id: string,
	path: string[],
	mime: string
};

export const FileEntry = {
	as(subject: any, path: string = ""): FileEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.file_id, path + "." + "file_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Array)) {
						for (let i = 0; i < subject.length; i++) {
							((subject, path) => {
								if ((subject != null) && (subject.constructor === String)) {
									return subject;
								}
								throw "Type guard \"String\" failed at \"" + path + "\"!";
							})(subject[i], path + "[" + i + "]");
						}
						return subject;
					}
					throw "Type guard \"Array\" failed at \"" + path + "\"!";
				})(subject.path, path + "." + "path");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.mime, path + "." + "mime");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is FileEntry {
		try {
			FileEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type MediaDatabase = {
	audio: {
		artists: ArtistEntry[],
		albums: AlbumEntry[],
		discs: DiscEntry[],
		tracks: TrackEntry[],
		album_artists: AlbumArtistEntry[],
		track_artists: TrackArtistEntry[]
	},
	video: {
		movies: MovieEntry[],
		shows: ShowEntry[],
		seasons: SeasonEntry[],
		episodes: EpisodeEntry[],
		subtitles: SubtitleEntry[],
		cues: CueEntry[]
	},
	files: FileEntry[]
};

export const MediaDatabase = {
	as(subject: any, path: string = ""): MediaDatabase {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Object)) {
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(ArtistEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.artists, path + "." + "artists");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(AlbumEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.albums, path + "." + "albums");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(DiscEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.discs, path + "." + "discs");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(TrackEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.tracks, path + "." + "tracks");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(AlbumArtistEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.album_artists, path + "." + "album_artists");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(TrackArtistEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.track_artists, path + "." + "track_artists");
						return subject;
					}
					throw "Type guard \"Object\" failed at \"" + path + "\"!";
				})(subject.audio, path + "." + "audio");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Object)) {
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(MovieEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.movies, path + "." + "movies");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(ShowEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.shows, path + "." + "shows");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(SeasonEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.seasons, path + "." + "seasons");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(EpisodeEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.episodes, path + "." + "episodes");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(SubtitleEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.subtitles, path + "." + "subtitles");
						((subject, path) => {
							if ((subject != null) && (subject.constructor === Array)) {
								for (let i = 0; i < subject.length; i++) {
									(CueEntry.as)(subject[i], path + "[" + i + "]");
								}
								return subject;
							}
							throw "Type guard \"Array\" failed at \"" + path + "\"!";
						})(subject.cues, path + "." + "cues");
						return subject;
					}
					throw "Type guard \"Object\" failed at \"" + path + "\"!";
				})(subject.video, path + "." + "video");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Array)) {
						for (let i = 0; i < subject.length; i++) {
							(FileEntry.as)(subject[i], path + "[" + i + "]");
						}
						return subject;
					}
					throw "Type guard \"Array\" failed at \"" + path + "\"!";
				})(subject.files, path + "." + "files");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is MediaDatabase {
		try {
			MediaDatabase.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type SubtitlesDatabase = { [key: string]: string[] };

export const SubtitlesDatabase = {
	as(subject: any, path: string = ""): SubtitlesDatabase {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				for (let key of Object.keys(subject)) {
					((subject, path) => {
						if ((subject != null) && (subject.constructor === Array)) {
							for (let i = 0; i < subject.length; i++) {
								((subject, path) => {
									if ((subject != null) && (subject.constructor === String)) {
										return subject;
									}
									throw "Type guard \"String\" failed at \"" + path + "\"!";
								})(subject[i], path + "[" + i + "]");
							}
							return subject;
						}
						throw "Type guard \"Array\" failed at \"" + path + "\"!";
					})(subject[key], path + "[\"" + key + "\"]");
				}
				return subject;
			}
			throw "Type guard \"Record\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is SubtitlesDatabase {
		try {
			SubtitlesDatabase.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type AudiolistEntry = {
	audiolist_id: string,
	title: string
};

export const AudiolistEntry = {
	as(subject: any, path: string = ""): AudiolistEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.audiolist_id, path + "." + "audiolist_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.title, path + "." + "title");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is AudiolistEntry {
		try {
			AudiolistEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type AudiolistItemEntry = {
	audiolist_id: string,
	track_id: string,
	number: number
};

export const AudiolistItemEntry = {
	as(subject: any, path: string = ""): AudiolistItemEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.audiolist_id, path + "." + "audiolist_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.track_id, path + "." + "track_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Number)) {
						return subject;
					}
					throw "Type guard \"Number\" failed at \"" + path + "\"!";
				})(subject.number, path + "." + "number");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is AudiolistItemEntry {
		try {
			AudiolistItemEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type ListDatabase = {
	audiolists: AudiolistEntry[],
	audiolist_items: AudiolistItemEntry[]
};

export const ListDatabase = {
	as(subject: any, path: string = ""): ListDatabase {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Array)) {
						for (let i = 0; i < subject.length; i++) {
							(AudiolistEntry.as)(subject[i], path + "[" + i + "]");
						}
						return subject;
					}
					throw "Type guard \"Array\" failed at \"" + path + "\"!";
				})(subject.audiolists, path + "." + "audiolists");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Array)) {
						for (let i = 0; i < subject.length; i++) {
							(AudiolistItemEntry.as)(subject[i], path + "[" + i + "]");
						}
						return subject;
					}
					throw "Type guard \"Array\" failed at \"" + path + "\"!";
				})(subject.audiolist_items, path + "." + "audiolist_items");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is ListDatabase {
		try {
			ListDatabase.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type UserEntry = {
	user_id: string,
	username: string,
	password: string
};

export const UserEntry = {
	as(subject: any, path: string = ""): UserEntry {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.user_id, path + "." + "user_id");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.username, path + "." + "username");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.password, path + "." + "password");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is UserEntry {
		try {
			UserEntry.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type AuthToken = {
	username: string,
	selector: string,
	validator_hash: string
};

export const AuthToken = {
	as(subject: any, path: string = ""): AuthToken {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.username, path + "." + "username");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.selector, path + "." + "selector");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === String)) {
						return subject;
					}
					throw "Type guard \"String\" failed at \"" + path + "\"!";
				})(subject.validator_hash, path + "." + "validator_hash");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is AuthToken {
		try {
			AuthToken.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type UserDatabase = {
	users: UserEntry[],
	tokens: AuthToken[]
};

export const UserDatabase = {
	as(subject: any, path: string = ""): UserDatabase {
		return ((subject, path) => {
			if ((subject != null) && (subject.constructor === Object)) {
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Array)) {
						for (let i = 0; i < subject.length; i++) {
							(UserEntry.as)(subject[i], path + "[" + i + "]");
						}
						return subject;
					}
					throw "Type guard \"Array\" failed at \"" + path + "\"!";
				})(subject.users, path + "." + "users");
				((subject, path) => {
					if ((subject != null) && (subject.constructor === Array)) {
						for (let i = 0; i < subject.length; i++) {
							(AuthToken.as)(subject[i], path + "[" + i + "]");
						}
						return subject;
					}
					throw "Type guard \"Array\" failed at \"" + path + "\"!";
				})(subject.tokens, path + "." + "tokens");
				return subject;
			}
			throw "Type guard \"Object\" failed at \"" + path + "\"!";
		})(subject, path);
	},
	is(subject: any): subject is UserDatabase {
		try {
			UserDatabase.as(subject);
		} catch (error) {
			return false;
		}
		return true;
	}
};

export type Autoguard = {
	ArtistEntry: ArtistEntry,
	AlbumEntry: AlbumEntry,
	DiscEntry: DiscEntry,
	TrackEntry: TrackEntry,
	AlbumArtistEntry: AlbumArtistEntry,
	TrackArtistEntry: TrackArtistEntry,
	MovieEntry: MovieEntry,
	ShowEntry: ShowEntry,
	SeasonEntry: SeasonEntry,
	EpisodeEntry: EpisodeEntry,
	SubtitleEntry: SubtitleEntry,
	CueEntry: CueEntry,
	FileEntry: FileEntry,
	MediaDatabase: MediaDatabase,
	SubtitlesDatabase: SubtitlesDatabase,
	AudiolistEntry: AudiolistEntry,
	AudiolistItemEntry: AudiolistItemEntry,
	ListDatabase: ListDatabase,
	UserEntry: UserEntry,
	AuthToken: AuthToken,
	UserDatabase: UserDatabase
};

export const Autoguard = {
	ArtistEntry: ArtistEntry,
	AlbumEntry: AlbumEntry,
	DiscEntry: DiscEntry,
	TrackEntry: TrackEntry,
	AlbumArtistEntry: AlbumArtistEntry,
	TrackArtistEntry: TrackArtistEntry,
	MovieEntry: MovieEntry,
	ShowEntry: ShowEntry,
	SeasonEntry: SeasonEntry,
	EpisodeEntry: EpisodeEntry,
	SubtitleEntry: SubtitleEntry,
	CueEntry: CueEntry,
	FileEntry: FileEntry,
	MediaDatabase: MediaDatabase,
	SubtitlesDatabase: SubtitlesDatabase,
	AudiolistEntry: AudiolistEntry,
	AudiolistItemEntry: AudiolistItemEntry,
	ListDatabase: ListDatabase,
	UserEntry: UserEntry,
	AuthToken: AuthToken,
	UserDatabase: UserDatabase
};
