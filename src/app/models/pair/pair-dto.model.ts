import { PlayerDto } from "../player/player-dto.model";

export class PairDto {
    id: number;
    player1: PlayerDto;
    player2: PlayerDto;
    active: boolean;
    dateCreation: string;
}