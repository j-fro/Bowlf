// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../common';
import ScoreButton from './ScoreButton';

type Props = {
  onScorePress: (_: number) => {},
};

const ButtonBlock = ({ onScorePress }: Props) => (
  <View>
    <View style={{ flexDirection: 'row' }}>
      <ScoreButton value={10} onScorePress={onScorePress} />
      <Button><Text>1x Gutter</Text></Button>
      <Button><Text>2x Gutter</Text></Button>
    </View>
    <View style={{ flexDirection: 'row' }}>
      <ScoreButton value={7} onScorePress={onScorePress} />
      <ScoreButton value={8} onScorePress={onScorePress} />
      <ScoreButton value={9} onScorePress={onScorePress} />
    </View>
    <View style={{ flexDirection: 'row' }}>
      <ScoreButton value={4} onScorePress={onScorePress} />
      <ScoreButton value={5} onScorePress={onScorePress} />
      <ScoreButton value={6} onScorePress={onScorePress} />
    </View>
    <View style={{ flexDirection: 'row' }}>
      <ScoreButton value={1} onScorePress={onScorePress} />
      <ScoreButton value={2} onScorePress={onScorePress} />
      <ScoreButton value={3} onScorePress={onScorePress} />
    </View>
  </View>
);

export default ButtonBlock;
