import React from 'react';
import { Text } from 'react-native';
import { Button } from '../common';

type Props = {
  value: number,
  onScorePress: (_: number) => {},
};

const ScoreButton = ({ onScorePress, value }: Props) => (
  <Button onPress={() => onScorePress(value)}><Text>{value}</Text></Button>
);

export default ScoreButton;
