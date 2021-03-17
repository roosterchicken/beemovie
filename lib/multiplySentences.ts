export function multiplySentences(num: number, words: boolean = false, globalarray: any, globalarray2: any) {
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