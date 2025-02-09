import { SetResult } from "./set-result.model";

export class MatchResult {
    matchId: number;
    matchDate: string;
    firstPairPlayer1: string;
    firstPairPlayer2: string;
    secondPairPlayer1: string;
    secondPairPlayer2:  string;
    setResults: SetResult[];
}
