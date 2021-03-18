import {Paragraph} from './functions/Paragraph'
import {Sentence} from './functions/Sentence'
import {Script} from './functions/Script'
import {Word} from './functions/Word'
import {Version} from './functions/Version'

export class global {
	public static globalarray: any;
	public static globalarray2: any;
	public static version: string = "1.0.3";
}

export {
	Paragraph,
	Sentence,
	Script,
	Word,
	Version
}
