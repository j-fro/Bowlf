// @flow
import shortid from 'shortid';
import { observable, action, autorun, computed } from 'mobx';

export class Player {
  @observable id = shortid.generate();
  @observable name = '';

  constructor() {
    autorun(() => console.debug(`Player ${this.id}: ${this.name}`));
  }

  @action changeName(name: string) {
    this.name = name;
  }
}

export class Score {
  @observable value: number = 0;
}

export class GameRound {
  id = shortid.generate();
  @observable scores: { [string]: Score } = {};

  constructor(players: Player[]) {
    players.forEach(player => {
      this.scores[player.id] = new Score();
    });

    autorun(() => console.debug('Round:', this.scores));
  }

  @action addScore(player: Player, score: number) {
    this.scores[player.id].value += score;
  }
}

export default class GameStore {
  @observable players: Player[] = [new Player()];
  @observable rounds: GameRound[] = [];
  @observable currentRound: GameRound;
  @observable currentPlayerIndex = 0;
  @computed get currentPlayer(): Player {
    return this.players[this.currentPlayerIndex];
  }
  @computed get playerCount(): number {
    return this.players.length;
  }

  constructor() {
    const Jimmy = new Player();
    Jimmy.name = 'Jimmy';
    const Amanda = new Player();
    Amanda.name = 'Amanda';

    this.players = [Jimmy, Amanda];
    autorun(() => {
      console.debug('==== Game Store ====');
      console.debug('Players:', this.players);
      console.debug('Current round:', this.currentRound);
      console.debug('Previous rounds:', this.rounds);
      console.debug('====================');
    });
  }

  @action addPlayer() {
    this.players.push(new Player());
  }

  @action removePlayer(playerId: string) {
    this.players = this.players.filter(player => player.id !== playerId);
  }

  @action startRound() {
    this.currentPlayerIndex = 0;
    const round = new GameRound(this.players);
    this.currentRound = round;
    this.rounds.push(round);
  }

  @action addScore(player: Player, score: number) {
    this.currentRound.addScore(player, score);
    this.nextPlayer();
  }

  @action addGutter(player: Player, score: number) {
    this.currentRound.addScore(player, score);
  }

  @action nextPlayer() {
    if (this.currentPlayerIndex + 1 < this.playerCount) {
      this.currentPlayerIndex += 1;
    } else {
      this.startRound();
    }
  }
}
