import { ResumePoint } from "./episode";
import { Copyright, ExternalUrl, Image, Paging, Restriction } from "./global";

/**
 * The structure containing the complete details of the Spotify Audiobook.
 */
export interface Audiobook extends SimplifiedAudiobook {
	/** The chapters of the audiobook. */
	chapters: Paging<SimplifiedChapter>;
}

/**
 * The structure containing the complete details of the Spotify Chapter.
 */
export interface Chapter extends SimplifiedChapter {
	/** The audiobook to which the chapter belongs to. */
	audiobook: SimplifiedAudiobook;
}

/**
 * The structure containing the simplified details of the Spotify Audiobook.
 */
export interface SimplifiedAudiobook {
	/** The authors of the auidobook. */
	authors: Username[];
	/** The markets where the audiobook is available. */
	available_markets: string[];
	/** The copyright statements of the audiobook. */
	copyrights: Copyright[];
	/** The description of the audiobook. */
	description: string;
	/** The description of the audiobook with HTML tags. */
	html_description: string;
	/** The edition of the audiobook. */
	edition: string;
	/** Boolean stating if the audiobook contains explicit content. */
	explicit: boolean;
	/** The external urls of the audiobook. */
	external_urls: ExternalUrl;
	/** The href of the audiobook. */
	href: string;
	/** The ID of the audiobook. */
	id: string;
	/** All the images related to audiobook (cover arts). */
	images: Image[];
	/** The languages used in the audiobook. */
	languages: string[];
	/** The media type of the audiobook. */
	media_type: string;
	/** The name of the audiobook. */
	name: string;
	/** The narrators of the audiobook. */
	narrators: Username[];
	/** The publisher of the audiobook. */
	publisher: string;
	/** The type of the audiobook. */
	type: "audiobook";
	/** The URI of the audiobook. */
	uri: string;
	/** The total chapters of the audiobook. */
	total_chapters: number;
}

/**
 * The structure containing the simplified details of Spotify Chapter.
 */
export interface SimplifiedChapter {
	/** The audio preview url of chapter. */
	audio_preview_url: string;
	/** The markets where the chapter is available. */
	available_markets: string[];
	/** The number of the chapter. */
	chapter_number: number;
	/** The description of the chapter. */
	description: string;
	/** The HTML description of the chapter. */
	html_description: string;
	/** The duration of the chapter in ms. */
	duration_ms: number;
	/** Boolean stating if the chapter is explicit or not. */
	explicit: boolean;
	/** The external urls of the chapter. */
	external_urls: ExternalUrl;
	/** The href of the chapter. */
	href: string;
	/** The ID of the chapter. */
	id: string;
	/** The images of the chapter. */
	images: Image[],
	/** Boolean stating if the chapter is playable or not. */
	is_playable: boolean;
	/** The languages of the chapter. */
	languages: string[];
	/** The name of the chapter. */
    name: string;
    /** The date the episode was first released, for example "1981-12-15". Depending on the precision, it might be shown as "1981" or "1981-12". */
    release_date: string;
    /** The precision with which release_date value is known: "year", "month", or "day". */
    release_date_precision: string;
    /** Included in the response when a content restriction is applied. */
    restrictions: Restriction;
    /** The user’s most recent position in the chapter. Set if the supplied access token is a user token and has the scope ‘user-read-playback-position’. */
    resume_point?: ResumePoint;
	/** The Spotify object type. */
	type: "episode";
    /** The Spotify URI for the chapter. */
    uri: string;
}

/**
 * The structure containing the name of a particular user.
 */
export interface Username {
	/** The name of the user. */
	name: string;
}