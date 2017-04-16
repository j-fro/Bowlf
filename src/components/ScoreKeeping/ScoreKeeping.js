// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observer, inject } from 'mobx-react';
import GameStore, { Player } from '../../stores/GameStore';
import { Button } from '../common';
import PlayerBlock from './PlayerBlock';

type Props = {
  store: GameStore,
  navigation: Object,
};

@inject('store')
@observer
export default class ScoreKeeping extends Component {
  static navigationOptions = {
    title: 'Bowlf',
  };

  props: Props;

  handleNextRoundPress = () => {
    this.props.store.startRound();
  };

  handleScorePress = (player: Player) => (value: number) => {
    this.props.store.addScore(player, value);
  };

  render() {
    const { store, navigation } = this.props;
    return (
      <View>
        {store.players.map(player => (
          <PlayerBlock
            key={player.id}
            player={player}
            onScorePress={this.handleScorePress(player)}
            score={store.currentRound.scores[player.id]}
            selected={store.currentPlayer.id === player.id}
          />
        ))}
        <Button onPress={() => this.handleNextRoundPress()}><Text>Next Round</Text></Button>
        <Button onPress={() => navigation.goBack()}><Text>Back to Players</Text></Button>
      </View>
    );
  }
}
