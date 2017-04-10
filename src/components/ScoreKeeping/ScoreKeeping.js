// @flow
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { observer, inject } from 'mobx-react';
import GameStore from '../../stores/GameStore';
import { Button } from '../common';
import PlayerBlock from './PlayerBlock';

type Props = {
  gameStore: GameStore,
  navigation: Object,
};

@inject('store')
@observer
export default class ScoreKeeping extends Component<void, Props, void> {
  static navigationOptions = {
    title: 'Bowlf',
  };

  render() {
    const { store, navigation } = this.props;
    return (
      <ScrollView>
        {store.players.map(player => <PlayerBlock key={player.id} player={player} />)}
        <Button onPress={() => navigation.goBack()}><Text>Back to Players</Text></Button>
      </ScrollView>
    );
  }
}
