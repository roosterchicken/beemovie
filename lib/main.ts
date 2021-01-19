let globalarray: any;
let globalarray2: any;
//let globalbool: boolean = true;
let version: string = "1.0.1";
import barry from "./beemovie.json";
const beemovie = barry.script;

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
	globalarray = array;
	return multiplySentences(sentence);
}
/**
 * @method: Prints the entire Bee Movie script.
 * @return: Bee Movie Script
 */
export function Script() {
	return beemovie;
}
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
	globalarray2 = array;
	return multiplySentences(word, true);
	//return multiplySentences(word, true);
}
/**
 * @method: Exposes version of the Bee Movie Module.
 * @return: Version
 */
export function Version() {
	return version;
}
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
				globalarray = arrayRemoveOnlyPeriods;
			} else if (pickArray == "question") {
				globalarray = array2RemoveOnlyPeriods;
			}
			const sentence = multiplySentences(1);
			//console.log(sentence);
			notglobalparagraph = notglobalparagraph + sentence + " ";
			//console.log(globalparagraph);
			sentenceNumber--;
		}
		num--;
	}
	return notglobalparagraph.replace("  ", " ").replace("...", ".");
	
}
function multiplySentences(num: number, words: boolean = false) {
	let string = "";
	if (words == false) {
	while (num > 0) {
		if (num == 1) {
			string = string + globalarray[Math.floor(Math.random()*globalarray.length)].trim() + ".";
		} else {
			string = string + globalarray[Math.floor(Math.random()*globalarray.length)].trim() + "." + " ";
		}
		num--;
	} 
	} else {
		while (num > 0) {
			if (num == 1) {
				string = string + globalarray2[Math.floor(Math.random()*globalarray2.length)].trim();
			} else {
				string = string + globalarray2[Math.floor(Math.random()*globalarray2.length)].trim() + " ";
			}
			num--;
		} 
	}
	return string;
}
