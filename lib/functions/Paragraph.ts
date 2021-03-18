import {beemovie} from './beemovie'
import {multiplySentences} from './multiplySentences'
import {global} from '../main'

/**
 * @method: Generates paragraph(s) between 3-5 sentences.
 * @param: Number of Paragraphs you wanna generate.
 * @return: 1 Paragraph by default, can set more via paramater.
 */
export function Paragraph(num: number = 1) {
	const bee1: string = beemovie.replace(/[^a-zA-Z'.?, ]/g, "");
	let periodsentence: any = bee1.split(".");
	let questionsentence: any = bee1.split("?");
	let notglobalparagraph: string = "";
	const array = periodsentence.filter((array: any) => {
		return array != "";
	})
	const array2 = questionsentence.filter((array: any) => {
		return array != "";
	})
	const arrayRemoveOnlyPeriods = array.filter((array : any) => {
		return array != ".";
	})
	const array2RemoveOnlyPeriods = array2.filter((array: any) =>{
		return array2 != ".";
	})
	while (num > 0) {
	const sentenceNumberArray: any = [ 3, 4, 5 ]
	let sentenceNumber: number = sentenceNumberArray[Math.floor(Math.random() * sentenceNumberArray.length)];
	while (sentenceNumber > 0) {
			const arrayPicker = [ "period", "question" ];
			const pickArray = arrayPicker[Math.floor(Math.random() * arrayPicker.length)];
			if (pickArray == "period") {
				global.globalarray = arrayRemoveOnlyPeriods;
			} else if (pickArray == "question") {
				global.globalarray = array2RemoveOnlyPeriods;
			}
			const sentence = multiplySentences(1, true);
			//console.log(sentence);
			notglobalparagraph = notglobalparagraph + sentence + " ";
			//console.log(globalparagraph);
			sentenceNumber--;
		}
		num--;
	}
	return notglobalparagraph.replace("  ", " ").replace("...", ".");
}
