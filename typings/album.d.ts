import { Artist, SimplifiedArtist } from "./artist";
import { SimplifiedTrack } from "./track";
import { Copyright, ExternalID, ExternalUrl, Image, Restriction, Saved, Paging } from "./global";

/**
 * The types of album.
 */
export type AlbumType = 'single' | 'album' | 'compilation';

/**
 * The groups of album.
 */
export type AlbumGroup = AlbumType | 'appears_on';

/**
 * The saved album object.
 */
export type SavedAlbum = Saved<'album', Album>

/**
 * The spotify object containing the complete details of the Spotify Album.
 */
export interface Album extends Omit<SimplifiedAlbum, 'album_group'> {
    /** The artists of the album. */
    artists: Artist[];
    /** The copyright statements of the album. */
    copyrights: Copyright[];
    /** Known external IDs for the album. */
    external_ids: ExternalID;
    /** A list of the genres used to classify the album. For example: “Prog Rock” , “Post-Grunge”. (If not yet classified, the array is empty.) */
    genres: string[];
    /** The label for the album. */
    label: string;
    /** The popularity of the album. The value will be between 0 and 100, with 100 being the most popular. The popularity is calculated from the popularity of the album’s individual tracks. */
    popularity: number;
    /** The tracks of the album. The object index says this is an array but the value returns as a Paging object so here is an union might be fixed in upcomming versions. */
    tracks: SimplifiedTrack[] | Paging<SimplifiedTrack>;
}

/**
 * The spotify object containing the simplified details of the Spotify Album.
 */
export interface SimplifiedAlbum {
    /** The field is present when getting an artist’s albums. */
    album_group?: AlbumGroup;
    /** The type of album. */
    album_type: AlbumType;
    /** The artists of the album. */
    artists: SimplifiedArtist[];
    /** The markets in which the album is available. */
    available_markets?: string[];
    /** Known external URLs for this album. */
    external_urls: ExternalUrl;
    /** A link to the Web API endpoint providing full details of the album. */
    href: string;
    /** The Spotify ID of the album. */
    id: string;
    /** The cover art for the album in various sizes, widest first. */
    images: Image[];
    /** The name of the album. */
    name: string;
    /** The date the album was first released, for example “1981-12-15”. */
    release_date: string;
    /** The precision with which release_date value is known: “year” , “month” , or “day”. */
    release_date_precision: string;
    /** Included in the response when a content restriction is applied.  */
    restrictions: Restriction[];
    /** The total number of tracks in the album. */
    total_tracks: number;
    /** The object type which will be 'album'. */
    type: 'album';
    /** The Spotify URI for the album. */
    uri: string;
}