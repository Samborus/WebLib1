import { WordType} from '../Model/WordType';

export interface IWord {
    Id: number;
    English: string;
    PolishLong: string[];
    SentenceId: number[];
    Type: WordType;
    Added: Date;
}
