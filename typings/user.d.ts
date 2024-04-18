import { Artist } from "./artist";
import { Image, ExternalUrl } from "./global";

/**
 * The product type in the User object.
 */
export type UserProductType = "free" | "open" | "premium";

/**
 * The token type in the AccessToken object.
 */
export type AccessTokenType = "bearer";

/**
 * The spotify api object containing the details of the followers of a user.
 */
export interface Followers {
    /** The api url where you can get the list of followers. This will be null as the spotify api does not supports it at the moment. */
    href: string | null;
    /** The total number of followers. */
    total: number;
}

/**
 * The spotify api object containing the information of explicit content.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-explicitcontentsettingsobject
 */
export interface ExplicitContentSettings {
    /** When true, indicates that explicit content should not be played. */
    filter_enabled: boolean;
    /** When true, indicates that the explicit content setting is locked and can’t be changed by the user. */
    filter_locked: boolean;
}

/**
 * The spotify api object containing details of a user's public and private details.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-privateuserobject
 */
export interface PrivateUser extends PublicUser {
    /** The country of the user, as set in the user’s account profile. */
    country: string;
    /** The user’s email address, as entered by the user when creating their account. */
    email: string;
    /** The user’s Spotify subscription level. */
    product?: UserProductType;
    /** The user’s explicit content settings. */
    explicit_content?: ExplicitContentSettings;
    /** The user’s profile image. */
    images: Image[];
    /** Information about the followers of the user. */
    followers: Followers;
}

/**
 * The spotify api object containing details of a user's public details.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-publicuserobject
 */
export interface PublicUser {
    /** The name displayed on the user’s profile. null if not available. */
    display_name: string | null;
    /** A link to the Web API endpoint for this user. */
    href: string;
    /** The Spotify user ID for the user. */
    id: string;
    /** The Spotify URI for the user. */
    uri: string;
    /** The Spotify object type which will be 'User'. */
    type: 'user' | 'artist';
    /** The user’s profile image. */
    images?: Image[];
    /** Information about the followers of the user. */
    followers?: Followers;
    /** Known external URLs for this user. */
    external_urls: ExternalUrl;
}

/**
 * The cursor paging object for followed artists.
 */
export interface FollowedArtistCursorPaging {
    /** A link to the Web API endpoint returning the full result of the request. */
    href: string;
    /** The maximum number of items in the response (as set in the query or by default). */
    limit: number;
    /** URL to the next page of items. (null if none) */
    next: string;
    /** The cursors used to find the next set of items. */
    cursors: {
        /** The cursor to use as key to find the next page of items. */
        after: string;
        /** The cursor to use as key to find the previous page of items. */
        before: string;
    };
    /** The total number of items available to return. */
    total: number;
    /** The requested data. */
    items: Artist[];
}

/**
 * An object containing artists followed by the user.
 */
export interface FollowedArtistsResults {
    /** The paging object giving you an array of artists followed by the user. */
    artists: FollowedArtistCursorPaging;
}

/**
 * The spotify api object containing the user's access token.
 *
 * @see https://developer.spotify.com/documentation/web-api/concepts/access-token
 */
export interface AccessToken {
    /** The token used to access the Spotify Web API */
    access_token: string;
    /** The type of token which is of type bearer */
    token_type: AccessTokenType;
    /** The time after which the access token expires */
    expires_in: number;
}