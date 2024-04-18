import { SimplifiedShow } from "./show";
import { ExternalUrl, Image, Restriction, Saved } from "./global";

/**
 * The saved episode object.
 */
export type SavedEpisode = Saved<'episode', Episode>;

/**
 * The structure containing the complete details of the Spotify episode.
 */
export interface Episode extends SimplifiedEpisode {
    /** The show on which the episode belongs. */
    show: SimplifiedShow;
}

/**
 * The structure containing the simplified details of the Spotify episode.
 */
export interface SimplifiedEpisode {
    /** A URL to a 30 second preview (MP3 format) of the episode. null if not available. */
    audio_preview_url: string | null;
    /** A description of the episode. HTML tags are stripped away from this field, use html_description field in case HTML tags are needed. */
    description: string;
    /** The episode length in milliseconds. */
    duration_ms: number;
    /** Whether or not the episode has explicit content (true = yes it does; false = no it does not OR unknown). */
    explicit: boolean;
    /** External URLs for this episode */
    external_urls: ExternalUrl;
    /** A link to the Web API endpoint providing full details of the episode. */
    href: string;
    /** A description of the episode. This field may contain HTML tags. */
    html_description: string;
    /** The Spotify ID for the episode. */
    id: string;
    /** The cover art for the episode in various sizes, widest first. */
    images: Image[];
    /** True if the episode is hosted outside of Spotify’s CDN. */
    is_externally_hosted: boolean;
    /** True if the episode is playable in the given market. Otherwise false. */
    is_playable: boolean;
    /** The language used in the episode, identified by a ISO 639 code. */
    language?: string;
    /** A list of the languages used in the episode, identified by their ISO 639 code. */
    languages: string[];
    /** The name of the episode. */
    name: string;
    /** The date the episode was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12". */
    release_date: string;
    /** The precision with which release_date value is known: "year", "month", or "day". */
    release_date_precision: string;
    /** Included in the response when a content restriction is applied. */
    restrictions: Restriction[];
    /** The user’s most recent position in the episode. Set if the supplied access token is a user token and has the scope ‘user-read-playback-position’. */
    resume_point?: ResumePoint;
    /** The object type: “episode”. */
    type: 'episode';
    /** The Spotify URI for the episode */
    uri: string;
}

/**
 * An object containing the resume point.
 */
export interface ResumePoint {
    /** Whether or not the episode has been fully played by the user. */
    fully_played: boolean;
    /** The user’s most recent position in the episode in milliseconds. */
    resume_position_ms: number;
}