import React from 'react';
import { View, Text } from 'react-native';
import { GameRound, Player } from '../../../stores/GameStore';
import RoundScoreDisplay from './RoundScoreDisplay';

type Props = {
  rounds: GameRound[],
  players: Player[],
};

const TotalScoreBoard = ({ rounds, players }: Props) => (
  <View style={{ flexDirection: 'row' }}>
    <View>{players.map(player => <Text key={player.id}>{player.name}</Text>)}</View>
    {rounds.map(round => <RoundScoreDisplay key={round.id} round={round} players={players} />)}
    <View>
      {players.map(player => (
        <Text key={player.id}>
          {rounds.reduce((sum, round) => sum + round.scores[player.id].value, 0)}
        </Text>
      ))}
    </View>
  </View>
);

export default TotalScoreBoard;
