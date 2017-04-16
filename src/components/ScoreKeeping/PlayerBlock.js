// @flow
import React from 'react';
import { Text, View } from 'react-native';
import { observer } from 'mobx-react';
import { Player, Score } from '../../stores/GameStore';
import ButtonBlock from './ButtonBlock';

type Props = {
  onScorePress: number => {},
  player: Player,
  score: Score,
  selected: boolean,
};

const PlayerBlock = observer(({ player, onScorePress, score, selected }: Props) => (
  <View>
    <Text>{player.name}</Text>
    <Text>{score.value}</Text>
    {selected && <ButtonBlock onScorePress={onScorePress} />}
  </View>
));

export default PlayerBlock;
