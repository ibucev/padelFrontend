import { Pair } from "./pair.model";
import { Set } from "./set.model";

export class Match {
    id: number;
    firstPair: Pair;
    secondPair: Pair;
    setResults: Set;
    matchDate: string;
}
