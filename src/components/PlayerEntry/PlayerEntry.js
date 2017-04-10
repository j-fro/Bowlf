// @flow
import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { observer, inject } from 'mobx-react';
import { main } from '../../config/routes';
import { Button } from '../common';
import GameStore from '../../stores/GameStore';
import EntryBlock from './EntryBlock';

type Props = {
  store: GameStore,
  navigation: Object,
};

@inject('store')
@observer
class PlayerEntry extends Component<void, Props, void> {
  static navigationOptions = {
    title: 'Player Info',
  };

  render() {
    const { store, navigation } = this.props;
    return (
      <ScrollView style={{ flex: 1 }}>

        {store.players.map(player => (
          <EntryBlock
            key={player.id}
            player={player}
            onPressRemove={() => store.removePlayer(player.id)}
          />
        ))}

        <Button onPress={() => store.addPlayer()}><Text>+</Text></Button>
        <Button onPress={() => navigation.navigate(main.scoreKeeping)}>
          <Text>Continue to Game</Text>
        </Button>
      </ScrollView>
    );
  }
}

export default PlayerEntry;
