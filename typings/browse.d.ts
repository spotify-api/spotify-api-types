import { Image } from "./global";
import { SimplifiedTrack, TuneableTrack } from "./track";

/**
 * An object containing details about the spotify category.
 */
export interface Category {
    /** A link to the Web API endpoint returning full details of the category. */
    href: string;
    /** The category icon, in various sizes. */
    icons: Image[];
    /** The Spotify category ID of the category. */
    id: string;
    /** The name of the category. */
    name: string;
}

/**
 * The spotify recommendation seed object.
 */
export interface RecommendationSeed {
    /** The number of tracks available after min_* and max_* filters have been applied. */
    afterFilteringSize: number;
    /** The number of tracks available after relinking for regional availability. */
    afterRelinkingSize: number;
    /** A link to the full track or artist data for this seed. */
    href: string;
    /** The id used to select this seed. This will be the same as the string used in the seed_artists, seed_tracks or seed_genres parameter. */
    id: string;
    /** The number of recommended tracks available for this seed. */
    initialPoolSize: number;
    /** The entity type of this seed. */
    type: 'artist' | 'track' | 'genre';
}

/**
 * The collection of recommendation seed objects with tracks provided from the spotify api..
 */
export interface Recommendations {
    /** An array of recommendation seed objects. */
    seeds: RecommendationSeed[];
    /** An array of track object (simplified) ordered according to the parameters supplied. */
    tracks: SimplifiedTrack[];
}

/**
 * Just an extension for [RecommendationQuery].
 */
export type RecommendationQueryExtension<T extends string> = Partial<Record<`min_${T}` | `max_${T}` | `target_${T}`, number>>;

/**
 * The query paramater structure of the [/recommendations] endpoint.
 */
export interface RecommendationQuery extends RecommendationQueryExtension<keyof TuneableTrack> {
    /** The target size of the list of recommended tracks. */
    limit?: number;
    /** An ISO 3166-1 alpha-2 country code or the string from_token. */
    market?: string;
    /** A comma separated list of Spotify IDs for seed artists. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres **/
    seed_artists: string;
    /** A comma separated list of any genres in the set of available genre seeds. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres. */
    seed_genres: string;
    /** A comma separated list of Spotify IDs for a seed track. Up to 5 seed values may be provided in any combination of seed_artists, seed_tracks and seed_genres. */
    seed_tracks: string;
}