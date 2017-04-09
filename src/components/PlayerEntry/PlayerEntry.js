import React from 'react';
import { ScrollView, Text } from 'react-native';
import { Button } from '../common';
import EntryBlock from './EntryBlock';

type Player = {
  name: string
};

type Props = {
  players: Player[]
};

const PlayerEntry = (props: Props) => (
  <ScrollView style={{ flex: 1 }}>
    {props.players.map(player => <EntryBlock key={player.name} name={player.name} />)}
    <EntryBlock />
    <Button><Text>+</Text></Button>
  </ScrollView>
);

export default PlayerEntry;
