import { SimplifiedEpisode } from "./episode";
import { Copyright, ExternalUrl, Image, Paging, Saved } from "./global";

/**
 * The saved show object.
 */
export type SavedShow = Saved<'show', Show>;

/**
 * The structure containing the complete details of the Spotify Show.
 */
export interface Show extends SimplifiedShow {
    /** A list of the show’s episodes. */
    episodes: SimplifiedEpisode[] | Paging<SimplifiedEpisode>;
}

/**
 * The structure containing the simplified details of the Spotify Show.
 */
export interface SimplifiedShow {
    /** A list of the countries in which the show can be played, identified by their ISO 3166-1 alpha-2 code. */
    available_markets: string[];
    /** The copyright statements of the show. */
    copyrights: Copyright[];
    /** A description of the show. HTML tags are stripped away from this field, use html_description field in case HTML tags are needed. */
    description: string;
    /** Whether or not the show has explicit content (true = yes it does; false = no it does not OR unknown). */
    explicit: boolean;
    /** External URLs for this show. */
    external_urls: ExternalUrl;
    /** A link to the Web API endpoint providing full details of the show. */
    href: string;
    /** A description of the show. This field may contain HTML tags. */
    html_description: string;
    /** The Spotify ID for the show. */
    id: string;
    /** The cover art for the show in various sizes, widest first. */
    images: Image[];
    /** True if all of the show’s episodes are hosted outside of Spotify’s CDN. This field might be null in some cases. */
    is_externally_hosted: boolean;
    /** A list of the languages used in the show, identified by their ISO 639 code. */
    languages: string[];
    /** The media type of the show. */
    media_type: string;
    /** The name of the show. */
    name: string;
    /** The publisher of the show. */
    publisher: string;
    /** The object type: “show”. */
    type: 'show';
    /** The Spotify URI for the show. */
    uri: string;
}