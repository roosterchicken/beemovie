import {global} from '../main'

export function multiplySentences(num: number, words: boolean = false) {
	let string = "";
	if (words == false) {
	while (num > 0) {
		if (num == 1) {
			string = string + global.globalarray[Math.floor(Math.random()*global.globalarray.length)].trim() + ".";
		} else {
			string = string + global.globalarray[Math.floor(Math.random()*global.globalarray.length)].trim() + "." + " ";
		}
		num--;
	} 
	} else {
		while (num > 0) {
			if (num == 1) {
				string = string + global.globalarray2[Math.floor(Math.random()*global.globalarray2.length)].trim();
			} else {
				string = string + global.globalarray2[Math.floor(Math.random()*global.globalarray2.length)].trim() + " ";
			}
			num--;
		} 
	}
	return string;
}
