import { SimplifiedAlbum } from './album';
import { Artist, SimplifiedArtist } from './artist';
import {
	ExternalID,
	ExternalUrl,
	Restriction,
	Saved,
	SpotifyType,
} from './global';

/**
 * The saved track object.
 */
export type SavedTrack = Saved<'track', Track>;

/**
 * The structure containing the simplified details of the Spotify Track.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-simplifiedtrackobject
 */
export interface SimplifiedTrack {
	/** The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist. */
	artists: SimplifiedArtist[];
	/** A list of the countries in which the track can be played. */
	available_markets?: string[];
	/** The disc number (usually 1 unless the album consists of more than one disc). */
	disc_number: number;
	/** The track length in milliseconds. */
	duration_ms: number;
	/** Whether or not the track has explicit lyrics ( true = yes it does; false = no it does not OR unknown). */
	explicit: boolean;
	/** External URLs for this track. */
	external_urls: ExternalUrl;
	/** A link to the Web API endpoint providing full details of the track. */
	href: string;
	/** The Spotify ID for the track. */
	id: string;
	/** Whether or not the track is from a local file. */
	is_local: boolean;
	/** Part of the response when Track Relinking is applied. If true , the track is playable in the given market. Otherwise false. */
	is_playable?: boolean;
	/** Part of the response when Track Relinking is applied and is only part of the response if the track linking, in fact, exists. */
	linked_from?: LinkedTrack;
	/** The name of the track. */
	name: string;
	/** A URL to a 30 second preview (MP3 format) of the track. */
	preview_url: string;
	/** Included in the response when a content restriction is applied. */
	restrictions: Restriction[];
	/** The number of the track. If an album has several discs, the track number is the number on the specified disc. */
	track_number: number;
	/** The object type: “track”. */
	type: 'track';
	/** The Spotify URI for the track. */
	uri: string;
}

/**
 * The structure containing the complete details of the Spotify Track.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-trackobject
 */
export interface Track extends SimplifiedTrack {
	/** The album on which the track appears.  */
	album: SimplifiedAlbum;
	/** The artists who performed the track. Each artist object includes a link in href to more detailed information about the artist. */
	artists: Artist[];
	/** Known external IDs for the track. */
	external_ids: ExternalID;
	/** The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. */
	popularity: number;
}

/**
 * The structure of the spotify linked track object.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-linkedtrackobject
 */
export interface LinkedTrack {
	/** A map of url name and the url. */
	external_urls: ExternalUrl;
	/** The api url where you can get the full details of the linked track. */
	href: string;
	/** The id of the linked track. */
	id: string;
	/** The type of spotify object. */
	type: SpotifyType;
	/** The uri of this object. */
	uri: string;
}

/**
 * An object containing all the features of the audio.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-audiofeaturesobject
 */
export interface AudioFeatures extends Omit<TuneableTrack, 'popularity'> {
	/** An HTTP URL to access the full audio analysis of this track. An access token is required to access this data. */
	analysis_url: string;
	/** The Spotify ID of the track. */
	id: string;
	/** A link to the Web API endpoint providing full details of the track. */
	track_href: string;
	/** The object type: “audio_features” */
	type: string;
	/** The Spotify URI for the track. */
	uri: string;
}

/**
 * The tuneable track object.
 *
 * @see https://developer.spotify.com/documentation/web-api/reference/#object-tuneabletrackobject
 */
export interface TuneableTrack {
	/** A confidence measure from 0.0 to 1.0 of whether the track is acoustic. 1.0 represents high confidence the track is acoustic. */
	acousticness: number;
	/** Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable. */
	danceability: number;
	/** The duration of the track in milliseconds. */
	duration_ms: number;
	/** Energy is a measure from 0.0 to 1.0 and represents a perceptual measure of intensity and activity. */
	energy: number;
	/** Predicts whether a track contains no vocals. “Ooh” and “aah” sounds are treated as instrumental in this context. Rap or spoken word tracks are clearly “vocal”. */
	instrumentalness: number;
	/** The key the track is in. Integers map to pitches using standard Pitch Class notation. */
	key: number;
	/** Detects the presence of an audience in the recording. Higher liveness values represent an increased probability that the track was performed live. */
	liveness: number;
	/** The overall loudness of a track in decibels (dB). */
	loudness: number;
	/** Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0. */
	mode: number;
	/** The popularity of the track. The value will be between 0 and 100, with 100 being the most popular. */
	popularity: number;
	/** Speechiness detects the presence of spoken words in a track. */
	speechiness: number;
	/** The overall estimated tempo of a track in beats per minute (BPM). */
	tempo: number;
	/** An estimated overall time signature of a track. */
	time_signature: number;
	/** A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. */
	valence: number;
}

/**
 * Time interval object of [TrackAudioAnalysis].
 * No documentation found for the object.
 */
export interface TimeInterval {
	/** The starting point (in seconds) of the time interval. */
	start: number;
	/** The duration (in seconds) of the time interval. */
	duration: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the interval. */
	confidence: number;
}

/**
 * The element structure of the array of [AudioAnalysis.sections] property.
 * No documentation found for the object.
 */
export type AudioSection = TimeInterval & {
	/** The overall loudness of the section in decibels (dB). Loudness values are useful for comparing relative loudness of sections within tracks. */
	loudness: number;
	/** The overall estimated tempo of the section in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration. */
	tempo: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the tempo. Some tracks contain tempo changes or sounds which don't contain tempo (like pure speech) which would correspond to a low value in this field. */
	tempo_confidence: number;
	/** The estimated overall key of the section. The values in this field ranging from 0 to 11 mapping to pitches using standard Pitch Class notation (E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on). If no key was detected, the value is -1. */
	key: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the key. Songs with many key changes may correspond to low values in this field. */
	key_confidence: number;
	/** Indicates the modality (major or minor) of a section, the type of scale from which its melodic content is derived. This field will contain a 0 for "minor", a 1 for "major", or a -1 for no result. Note that the major key (e.g. C major) could more likely be confused with the minor key at 3 semitones lower (e.g. A minor) as both keys carry the same pitches. */
	mode: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the mode. */
	mode_confidence: number;
	/** An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4". */
	time_signature: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the time_signature. Sections with time signature changes may correspond to low values in this field. */
	time_signature_confidence: number;
};

/**
 * The element structure of the array of [AudioAnalysis.segments] property.
 * No documentation found for the object.
 */
export type AudioSegment = TimeInterval & {
	/** The onset loudness of the segment in decibels (dB). Combined with loudness_max and loudness_max_time, these components can be used to describe the "attack" of the segment. */
	loudness_start: number;
	/** The peak loudness of the segment in decibels (dB). Combined with loudness_start and loudness_max_time, these components can be used to describe the "attack" of the segment. */
	loudness_max: number;
	/** The segment-relative offset of the segment peak loudness in seconds. Combined with loudness_start and loudness_max, these components can be used to desctibe the "attack" of the segment. */
	loudness_max_time: number;
	/** The offset loudness of the segment in decibels (dB). This value should be equivalent to the loudness_start of the following segment. */
	loudness_end: number;
	/** Pitch content is given by a “chroma” vector, corresponding to the 12 pitch classes C, C#, D to B, with values ranging from 0 to 1 that describe the relative dominance of every pitch in the chromatic scale. For example a C Major chord would likely be represented by large values of C, E and G (i.e. classes 0, 4, and 7). */
	pitches: number[];
	/** Timbre is the quality of a musical note or sound that distinguishes different types of musical instruments, or voices. It is a complex notion also referred to as sound color, texture, or tone quality, and is derived from the shape of a segment’s spectro-temporal surface, independently of pitch and loudness. */
	timbre: number[];
};

/**
 * The object structure of [AudioAnalysis.track] property.
 * No documentation found for the object.
 */
export interface AudioTrack {
	/** The exact number of audio samples analyzed from this track. See also analysis_sample_rate. */
	num_samples: number;
	/** Length of the track in seconds. */
	duration: number;
	/** This field will always contain the empty string. */
	sample_md5: string;
	/** An offset to the start of the region of the track that was analyzed. (As the entire track is analyzed, this should always be 0.) */
	offset_seconds: number;
	/** The length of the region of the track was analyzed, if a subset of the track was analyzed. (As the entire track is analyzed, this should always be 0.) */
	window_seconds: number;
	/** The sample rate used to decode and analyze this track. May differ from the actual sample rate of this track available on Spotify. */
	analysis_sample_rate: number;
	/** The number of channels used for analysis. If 1, all channels are summed together to mono before analysis. */
	analysis_channels: number;
	/** The time, in seconds, at which the track's fade-in period ends. If the track has no fade-in, this will be 0.0. */
	end_of_fade_in: number;
	/** The time, in seconds, at which the track's fade-out period starts. If the track has no fade-out, this should match the track's length. */
	start_of_fade_out: number;
	/** The overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track and are useful for comparing relative loudness of tracks. Loudness is the quality of a sound that is the primary psychological correlate of physical strength (amplitude). Values typically range between -60 and 0 db. */
	loudness: number;
	/** The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.  */
	tempo: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the tempo. */
	tempo_confidence: number;
	/** An estimated time signature. The time signature (meter) is a notational convention to specify how many beats are in each bar (or measure). The time signature ranges from 3 to 7 indicating time signatures of "3/4", to "7/4". */
	time_signature: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the time_signature. */
	time_signature_confidence: number;
	/** The key the track is in. Integers map to pitches using standard Pitch Class notation. E.g. 0 = C, 1 = C♯/D♭, 2 = D, and so on. If no key was detected, the value is -1. */
	key: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the key. */
	key_confidence: number;
	/** Mode indicates the modality (major or minor) of a track, the type of scale from which its melodic content is derived. Major is represented by 1 and minor is 0. */
	mode: number;
	/** The confidence, from 0.0 to 1.0, of the reliability of the mode. */
	mode_confidence: number;
	/** An Echo Nest Musical Fingerprint (ENMFP) codestring for this track. */
	codestring: string;
	/** A version number for the Echo Nest Musical Fingerprint format used in the codestring field. */
	code_version: number;
	/** An EchoPrint codestring for this track. */
	echoprintstring: string;
	/** A version number for the EchoPrint format used in the echoprintstring field. */
	echoprint_version: number;
	/** A Synchstring for this track. */
	synchstring: string;
	/** A version number for the Synchstring used in the synchstring field. */
	synch_version: number;
	/** A Rhythmstring for this track. The format of this string is similar to the Synchstring. */
	rhythmstring: string;
	/** A version number for the Rhythmstring used in the rhythmstring field. */
	rhythm_version: number;
}

/**
 * The object structure of [AudioAnalysis.meta] property.
 * No documentation found for the object.
 */
export interface AudioAnalysisMeta {
	/** The version of the Analyzer used to analyze this track. */
	analyzer_version: string;
	/** The platform used to read the track's audio data. */
	platform: string;
	/** A detailed status code for this track. If analysis data is missing, this code may explain why. */
	detailed_status: string;
	/** The return code of the analyzer process. 0 if successful, 1 if any errors occurred. */
	status_code: number;
	/** The Unix timestamp (in seconds) at which this track was analyzed. */
	timestamp: number;
	/** The amount of time taken to analyze this track. */
	analysis_time: number;
	/** The method used to read the track's audio data. */
	input_process: string;
}

/**
 * The object structure returned by [/audio-analysis/{id}] endpoint.
 * No documentation found for the object.
 */
export interface AudioAnalysis {
	/** The time intervals of the bars throughout the track. A bar (or measure) is a segment of time defined as a given number of beats. */
	bars: TimeInterval[];
	/** The time intervals of beats throughout the track. A beat is the basic time unit of a piece of music; for example, each tick of a metronome. Beats are typically multiples of tatums. */
	beats: TimeInterval[];
	/** A tatum represents the lowest regular pulse train that a listener intuitively infers from the timing of perceived musical events (segments). */
	tatums: TimeInterval[];
	/** Sections are defined by large variations in rhythm or timbre, e.g. chorus, verse, bridge, guitar solo, etc. Each section contains its own descriptions of tempo, key, mode, time_signature, and loudness. */
	sections: AudioSection[];
	/** Each segment contains a roughly conisistent sound throughout its duration. */
	segments: AudioSegment[];
	/** No documentation found for the object. */
	track: AudioTrack;
	/** No documentation found for the object. */
	meta: AudioAnalysisMeta;
}
