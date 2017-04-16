import React from 'react';
import { View, Text } from 'react-native';
import { GameRound, Player } from '../../../stores/GameStore';

type Props = {
  round: GameRound,
  players: Player[],
};

const RoundScoreDisplay = ({ round, players }: Props) => (
  <View>
    {players.map(player => (
      <View key={player.id}><Text>{round.scores[player.id].value}</Text></View>
    ))}
  </View>
);

export default RoundScoreDisplay;
