// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { observer, inject } from 'mobx-react';
import GameStore, { Player } from '../../stores/GameStore';
import { Button } from '../common';
import PlayerBlock from './PlayerBlock';
import TotalScoreBoard from './TotalScoreBoard';

type Props = {
  store: GameStore,
  navigation: Object,
};

@inject('store')
@observer
export default class ScoreKeeping extends Component {
  static navigationOptions = {
    header: {
      title: 'Bowlf',
      left: null,
    },
  };

  props: Props;

  handleNextRoundPress = () => {
    this.props.store.startRound();
  };

  handleScorePress = (player: Player) => (value: number) => {
    this.props.store.addScore(player, value);
  };

  handleGutterPress = (player: Player) => (value: number) => {
    this.props.store.addGutter(player, value * 8);
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
            onGutterPress={this.handleGutterPress(player)}
            score={store.currentRound.scores[player.id]}
            selected={store.currentPlayer.id === player.id}
          />
        ))}
        <TotalScoreBoard rounds={store.rounds} players={store.players} />
        <Button onPress={() => this.handleNextRoundPress()}><Text>Next Round</Text></Button>
        <Button onPress={() => navigation.goBack()}><Text>Back to Players</Text></Button>
      </View>
    );
  }
}
