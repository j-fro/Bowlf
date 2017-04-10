import uuid from 'uuid';
import { action, observable, computed, autorun } from 'mobx';

export class Player {
  @observable id = uuid();
  @observable name = '';

  constructor() {
    autorun(() => console.debug(`Player ${this.id}: ${this.name}`));
  }

  @action changeName(name) {
    this.name = name;
  }
}

export default class PlayersStore {
  @observable players: Player[] = [new Player()];

  constructor() {
    autorun(() => {
      console.debug('==== Players Store ====');
      console.debug('# of Players:', this.playerCount);
      console.debug('Players:', this.players);
      console.debug('=======================');
    });
  }

  @computed get playerCount() {
    return this.players.length;
  }

  @action addPlayer() {
    this.players.push(new Player());
  }

  @action removePlayer(playerId) {
    this.players = this.players.filter(player => player.id !== playerId);
  }
}
