import React from 'react';
import { Text, View } from 'react-native';
import { Player } from '../../stores/GameStore';

type Props = {
  player: Player,
};

const PlayerBlock = ({ player }: Props) => <View><Text>{player.name}</Text></View>;

export default PlayerBlock;
