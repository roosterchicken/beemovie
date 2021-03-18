import {beemovie} from './beemovie'
import {multiplySentences} from './multiplySentences'
import {global} from '../main'

/**
 * @method: Generates a sentence from the Bee Movie.
 * @param: Number of Sentences
 * @return: Sentence(s)
 */
export function Sentence(sentence: number = 1) {
	let bee1: string = beemovie.replace("/^(-)/", "");
	let words: any = bee1.split(".");
	const array = words.filter((array: any) => {
		return array != "";
	});
	global.globalarray = array;
	return multiplySentences(sentence, false);
}
