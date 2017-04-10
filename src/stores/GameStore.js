// @flow
import uuid from 'uuid';
import { observable, action, autorun, computed } from 'mobx';

export class Player {
  @observable id = uuid();
  @observable name = '';

  constructor() {
    autorun(() => console.debug(`Player ${this.id}: ${this.name}`));
  }

  @action changeName(name: string) {
    this.name = name;
  }
}

export class Score {
  @observable player: Player;
  @observable score = 0;
}

export class GameRound {
  @observable scores: Score[] = [];
}

export default class GameStore {
  @observable players: Player[] = [new Player()];
  @observable rounds: GameRound[] = [];

  constructor() {
    autorun(() => {
      console.debug('==== Game Store ====');
      console.debug('Players:', this.players);
      console.debug('====================');
    });
  }

  @computed get playerCount(): number {
    return this.players.length;
  }

  @action addPlayer() {
    this.players.push(new Player());
  }

  @action removePlayer(playerId: string) {
    this.players = this.players.filter(player => player.id !== playerId);
  }

  @action startRound() {
    this.rounds.push(new GameRound());
  }
}
