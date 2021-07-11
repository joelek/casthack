// This file was auto-generated by @joelek/ts-autoguard. Edit at own risk.

import * as autoguard from "@joelek/ts-autoguard/dist/lib-shared";
import { PlaylistBase } from "../../../api/schema/objects";
import { PlaylistItemBase } from "../../../api/schema/objects";

export const SetToken = autoguard.guards.Object.of({
	"token": autoguard.guards.Union.of(
		autoguard.guards.String,
		autoguard.guards.Undefined
	)
});

export type SetToken = ReturnType<typeof SetToken["as"]>;

export const PermissionsRequest = autoguard.guards.Object.of({
	"playlist": autoguard.guards.Object.of({
		"playlist_id": autoguard.guards.String
	})
});

export type PermissionsRequest = ReturnType<typeof PermissionsRequest["as"]>;

export const PermissionsResponse = autoguard.guards.Object.of({
	"permissions": autoguard.guards.Union.of(
		autoguard.guards.StringLiteral.of("read"),
		autoguard.guards.StringLiteral.of("write")
	)
});

export type PermissionsResponse = ReturnType<typeof PermissionsResponse["as"]>;

export const CreatePlaylistRequest = autoguard.guards.Object.of({
	"playlist": autoguard.guards.Object.of({
		"title": autoguard.guards.String,
		"description": autoguard.guards.String
	})
});

export type CreatePlaylistRequest = ReturnType<typeof CreatePlaylistRequest["as"]>;

export const CreatePlaylistResponse = autoguard.guards.Object.of({
	"errors": autoguard.guards.Array.of(autoguard.guards.String),
	"playlist_id": autoguard.guards.String
});

export type CreatePlaylistResponse = ReturnType<typeof CreatePlaylistResponse["as"]>;

export const CreatePlaylist = autoguard.guards.Object.of({
	"playlist": autoguard.guards.Reference.of(() => PlaylistBase)
});

export type CreatePlaylist = ReturnType<typeof CreatePlaylist["as"]>;

export const DeletePlaylistRequest = autoguard.guards.Object.of({
	"playlist": autoguard.guards.Object.of({
		"playlist_id": autoguard.guards.String
	})
});

export type DeletePlaylistRequest = ReturnType<typeof DeletePlaylistRequest["as"]>;

export const DeletePlaylistResponse = autoguard.guards.Object.of({
	"errors": autoguard.guards.Array.of(autoguard.guards.String)
});

export type DeletePlaylistResponse = ReturnType<typeof DeletePlaylistResponse["as"]>;

export const DeletePlaylist = autoguard.guards.Object.of({
	"playlist": autoguard.guards.Reference.of(() => PlaylistBase)
});

export type DeletePlaylist = ReturnType<typeof DeletePlaylist["as"]>;

export const UpdatePlaylistRequest = autoguard.guards.Object.of({
	"playlist": autoguard.guards.Object.of({
		"playlist_id": autoguard.guards.String,
		"title": autoguard.guards.String,
		"description": autoguard.guards.String
	})
});

export type UpdatePlaylistRequest = ReturnType<typeof UpdatePlaylistRequest["as"]>;

export const UpdatePlaylistResponse = autoguard.guards.Object.of({
	"errors": autoguard.guards.Array.of(autoguard.guards.String)
});

export type UpdatePlaylistResponse = ReturnType<typeof UpdatePlaylistResponse["as"]>;

export const UpdatePlaylist = autoguard.guards.Object.of({
	"playlist": autoguard.guards.Reference.of(() => PlaylistBase)
});

export type UpdatePlaylist = ReturnType<typeof UpdatePlaylist["as"]>;

export const CreatePlaylistItemRequest = autoguard.guards.Object.of({
	"playlist_item": autoguard.guards.Object.of({
		"playlist_id": autoguard.guards.String,
		"track_id": autoguard.guards.String
	})
});

export type CreatePlaylistItemRequest = ReturnType<typeof CreatePlaylistItemRequest["as"]>;

export const CreatePlaylistItemResponse = autoguard.guards.Object.of({
	"errors": autoguard.guards.Array.of(autoguard.guards.String),
	"playlist_item_id": autoguard.guards.String
});

export type CreatePlaylistItemResponse = ReturnType<typeof CreatePlaylistItemResponse["as"]>;

export const CreatePlaylistItem = autoguard.guards.Object.of({
	"playlist_item": autoguard.guards.Reference.of(() => PlaylistItemBase)
});

export type CreatePlaylistItem = ReturnType<typeof CreatePlaylistItem["as"]>;

export const DeletePlaylistItemRequest = autoguard.guards.Object.of({
	"playlist_item": autoguard.guards.Object.of({
		"playlist_item_id": autoguard.guards.String
	})
});

export type DeletePlaylistItemRequest = ReturnType<typeof DeletePlaylistItemRequest["as"]>;

export const DeletePlaylistItemResponse = autoguard.guards.Object.of({
	"errors": autoguard.guards.Array.of(autoguard.guards.String)
});

export type DeletePlaylistItemResponse = ReturnType<typeof DeletePlaylistItemResponse["as"]>;

export const DeletePlaylistItem = autoguard.guards.Object.of({
	"playlist_item": autoguard.guards.Reference.of(() => PlaylistItemBase)
});

export type DeletePlaylistItem = ReturnType<typeof DeletePlaylistItem["as"]>;

export const UpdatePlaylistItemRequest = autoguard.guards.Object.of({
	"playlist_item": autoguard.guards.Object.of({
		"playlist_item_id": autoguard.guards.String,
		"number": autoguard.guards.Number
	})
});

export type UpdatePlaylistItemRequest = ReturnType<typeof UpdatePlaylistItemRequest["as"]>;

export const UpdatePlaylistItemResponse = autoguard.guards.Object.of({
	"errors": autoguard.guards.Array.of(autoguard.guards.String)
});

export type UpdatePlaylistItemResponse = ReturnType<typeof UpdatePlaylistItemResponse["as"]>;

export const UpdatePlaylistItem = autoguard.guards.Object.of({
	"playlist_item": autoguard.guards.Reference.of(() => PlaylistItemBase)
});

export type UpdatePlaylistItem = ReturnType<typeof UpdatePlaylistItem["as"]>;

export namespace Autoguard {
	export const Guards = {
		"SetToken": autoguard.guards.Reference.of(() => SetToken),
		"PermissionsRequest": autoguard.guards.Reference.of(() => PermissionsRequest),
		"PermissionsResponse": autoguard.guards.Reference.of(() => PermissionsResponse),
		"CreatePlaylistRequest": autoguard.guards.Reference.of(() => CreatePlaylistRequest),
		"CreatePlaylistResponse": autoguard.guards.Reference.of(() => CreatePlaylistResponse),
		"CreatePlaylist": autoguard.guards.Reference.of(() => CreatePlaylist),
		"DeletePlaylistRequest": autoguard.guards.Reference.of(() => DeletePlaylistRequest),
		"DeletePlaylistResponse": autoguard.guards.Reference.of(() => DeletePlaylistResponse),
		"DeletePlaylist": autoguard.guards.Reference.of(() => DeletePlaylist),
		"UpdatePlaylistRequest": autoguard.guards.Reference.of(() => UpdatePlaylistRequest),
		"UpdatePlaylistResponse": autoguard.guards.Reference.of(() => UpdatePlaylistResponse),
		"UpdatePlaylist": autoguard.guards.Reference.of(() => UpdatePlaylist),
		"CreatePlaylistItemRequest": autoguard.guards.Reference.of(() => CreatePlaylistItemRequest),
		"CreatePlaylistItemResponse": autoguard.guards.Reference.of(() => CreatePlaylistItemResponse),
		"CreatePlaylistItem": autoguard.guards.Reference.of(() => CreatePlaylistItem),
		"DeletePlaylistItemRequest": autoguard.guards.Reference.of(() => DeletePlaylistItemRequest),
		"DeletePlaylistItemResponse": autoguard.guards.Reference.of(() => DeletePlaylistItemResponse),
		"DeletePlaylistItem": autoguard.guards.Reference.of(() => DeletePlaylistItem),
		"UpdatePlaylistItemRequest": autoguard.guards.Reference.of(() => UpdatePlaylistItemRequest),
		"UpdatePlaylistItemResponse": autoguard.guards.Reference.of(() => UpdatePlaylistItemResponse),
		"UpdatePlaylistItem": autoguard.guards.Reference.of(() => UpdatePlaylistItem)
	};

	export type Guards = { [A in keyof typeof Guards]: ReturnType<typeof Guards[A]["as"]>; };

	export const Requests = {};

	export type Requests = { [A in keyof typeof Requests]: ReturnType<typeof Requests[A]["as"]>; };

	export const Responses = {};

	export type Responses = { [A in keyof typeof Responses]: ReturnType<typeof Responses[A]["as"]>; };
};
