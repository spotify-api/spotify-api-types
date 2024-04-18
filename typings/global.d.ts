import { Artist } from "./artist";
import { Track } from "./track";
import { SimplifiedAlbum } from "./album";
import { SimplifiedEpisode } from "./episode";
import { SimplifiedShow } from "./show";
import { SimplifiedPlaylist } from "./playlist";
import { SimplifiedAudiobook } from "./audiobook";

/**
 * All the spotify element types
 */
export type SpotifyType = 'user' | 'episode' | 'playlist' | 'show' | 'track' | 'album' | 'artist' | 'audiobook';

/**
 * All the spotify search types.
 */
export type SearchType = 'album' | 'artist' | 'track' |  'show' | 'episode' | 'playlist' | 'audiobook';

/**
 * The spotify object containing the details of an image.
 */
export interface Image {
    /** The image height in pixels. If unknown: null or not returned. */
    height: number | null;
    /** The source URL of the image. */
    url: string;
    /** The image width in pixels. If unknown: null or not returned. */
    width: number | null;
}

/**
 * The external urls object which contains the spotify url within it.
 */
export interface ExternalUrl {
    /** The Spotify URL for the object. */
    spotify: string;
}

/**
 * The external ids object which contains the spotify id within it.
 */
export interface ExternalID {
    /** International Article Number */
    ean: string;
    /** International Standard Recording Code */
    isrc: string;
    /** Universal Product Code */
    upc: string;
}

/**
 * The paging object is a form of collection of items from the spotify api.
 */
export interface Paging<T> {
    /** A link to the Web API endpoint returning the full result of the request. */
    href: string;
    /** The requested data. */
    items: T[];
    /** The maximum number of items in the response (as set in the query or by default). */
    limit: number;
    /** URL to the next page of items. (null if none) */
    next?: string;
    /** The offset of the items returned (as set in the query or by default) */
    offset: number;
    /** URL to the previous page of items. (null if none) */
    previous?: string;
    /** The total number of items available to return. */
    total: number;
}

/**
 * The cursor object having before and after keys of the items.
 */
export interface Cursor {
    /** The cursor to use as key to find the next page of items. */
    after: string;
    /** The cursor to use as key to find the previous page of items. */
    before: string;
}


/**
 * The paging object but with a additional cursor field.
 */
export interface CursorPaging<T> extends Omit<Paging<T>, 'offset' | 'previous'> {
    /** The cursors used to find the next set of items. */
    cursors: Cursor;
}

/**
 * The copyright object contains the type and the name of copyright.
 */
export interface Copyright {
    /** The text of copyright. */
    text: string;
    /** The type of copyright. */
    type: 'C' | 'P';
}

/**
 * The object containing the reason of restriction by the spotify api.
 */
export interface Restriction {
    /** The reason for the restriction. */
    reason: 'market' | 'product' | 'explicit';
}

/**
 * The error response sent by the spotify api during unusual status codes.
 */
export interface ErrorResponse {
    /** A short description of the cause of the error. */
    message: string;
    /** The HTTP status code (also returned in the response header; see Response Status Codes for more information). */
    status: number;
}

/**
 * The object containing the saved elements and the timestamp when they were added.
 */
export type Saved<K extends SpotifyType, T> = { added_at: string } & Record<K, T>;

/** 
 * The object structure returned by the [/search] endpoint.
 */
export interface SearchContent {
    /** The episode search results. */
    episodes?: Paging<SimplifiedEpisode>;
    /** The show search results. */
    shows?: Paging<SimplifiedShow>;
    /** The track search results. */
    tracks?: Paging<Track>;
    /** The artists search results. */
    artists?: Paging<Artist>;
    /** The album search results. */
    albums?: Paging<SimplifiedAlbum>;
    /** The playlist search results. */
    playlists?: Paging<SimplifiedPlaylist>;
    /** The audiobook search results. */
    audiobooks?: Paging<SimplifiedAudiobook>;
}