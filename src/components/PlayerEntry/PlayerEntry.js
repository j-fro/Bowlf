import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../common';
import EntryBlock from './EntryBlock';

const PlayerEntry = () => <View><EntryBlock /><Button><Text>+</Text></Button></View>;

export default PlayerEntry;
