import { Followers, PublicUser } from "./user";
import { Track } from "./track";
import { Episode } from "./episode";
import { ExternalUrl, Image, Paging } from "./global";

/**
 * The structure containing the reference for the tracks of the playlist..
 */
export interface PlaylistTracksReference {
    /** A link to the Web API endpoint where full details of the playlist’s tracks can be retrieved. */
    href: string;
    /** The total number of tracks in playlist. */
    total: number;
}

/**
 * The structure containing the details of the Spotify Track in the playlist..
 */
export interface PlaylistTrack {
    /** The date and time the track or episode was added.  */
    added_at: string | null;
    /** The Spotify user who added the track or episode. */
    added_by: PublicUser | null;
    /** Whether this track or episode is a local file or not. */
    is_local: boolean;
    /** Information about the track or episode. */
    track: Track | Episode | null;
}

/**
 * The structure containing the simplified details of the Spotify Playlist.
 */
export interface SimplifiedPlaylist {
    /** True if the owner allows other users to modify the playlist. */
    collaborative: boolean;
    /** The playlist description. Only returned for modified, verified playlists, otherwise null. */
    description: string | null;
    /** Known external URLs for this playlist. */
    external_urls: ExternalUrl;
    /** A link to the Web API endpoint providing full details of the playlist. */
    href: string;
    /** The Spotify ID for the playlist. */
    id: string;
    /** Images for the playlist. The array may be empty or contain up to three images. */
    images: Image[];
    /** The name of the playlist. */
    name: string;
    /** The user who owns the playlist. */
    owner: PublicUser;
    /** The version identifier for the current playlist. Can be supplied in other requests to target a specific playlist version */
    snapshot_id: string;
    /** A collection containing a link ( href ) to the Web API endpoint where full details of the playlist’s tracks can be retrieved, along with the total number of tracks in the playlist. */
    tracks: PlaylistTracksReference;
    /** The Spotify URI for the playlist. */
    uri: string;
    /** The object type: “playlist” */
    type: 'playlist';
}

/**
 * The structure containing the complete details of the Spotify Playlist.
 */
export interface Playlist extends Omit<SimplifiedPlaylist, 'tracks'> {
    /** Information about the followers of the playlist. */
    followers: Followers;
    /** The playlist’s public/private status: true the playlist is public, false the playlist is private, null the playlist status is not relevant. */
    public: boolean | null;
    /** Information about the tracks of the playlist. Note, a track object may be null. This can happen if a track is no longer available. */
    tracks: PlaylistTrack[];
}

/**
 * The structure returned by the [/browse/featured-playlists] endpoint.
 */
export interface FeaturedPlaylists {
    /** The message from the featured playlists. */
    message: string;
    /** The list of the featured playlists wrapped in Paging object. */
    playlists: Paging<Playlist>
}

/**
 * The query structure required by the [/users/{id}/playlists] enpoint.
 */
export interface CreatePlaylistQuery {
    /** The name for the new playlist, for example "Your Coolest Playlist". */
    name: string;
    /** Defaults to true. If true the playlist will be public. */
    public?: boolean;
    /** Defaults to false. If true the playlist will be collaborative. */
    collaboratve?: boolean;
    /** The description for the playlist. */
    description?: string;
}