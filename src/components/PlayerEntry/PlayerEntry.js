import React from 'react';
import { ScrollView, Text } from 'react-native';
import { observer } from 'mobx-react';
import PlayersStore from '../../stores/PlayersStore';
import { Button } from '../common';
import EntryBlock from './EntryBlock';

type Props = {
  store: PlayersStore,
};

const PlayerEntry = observer(({ store }: Props) => (
  <ScrollView style={{ flex: 1 }}>
    {store.players.map(player => (
      <EntryBlock
        key={player.id}
        player={player}
        onPressRemove={() => store.removePlayer(player.id)}
      />
    ))}
    <Button onPress={() => store.addPlayer()}><Text>+</Text></Button>
  </ScrollView>
));

export default PlayerEntry;
