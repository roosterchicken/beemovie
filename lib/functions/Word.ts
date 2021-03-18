import {beemovie} from './beemovie'
import {multiplySentences} from './multiplySentences'
import {global} from '../main'

/**
 * @method: Generates words from the Bee Movie.
 * @param: Number of Words.
 * @return: Word(s)
 */
export function Word(word: number = 1) {
	const bee1: string = beemovie.replace(/[^a-zA-Z' ]/g, "");
	let words: any = bee1.split(" ");
	const array = words.filter((array: any) => {
		return array != "";
	})
	global.globalarray2 = array;
	return multiplySentences(word, true);
	//return multiplySentences(word, true);
}
