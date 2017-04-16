// @flow
import React from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Player } from '../../stores/GameStore';
import { Button, TextInput } from '../common';

type Props = { player: Player, onPressRemove: () => void };

const EntryBlock = observer(({ player, onPressRemove }: Props) => (
  <View style={{ flex: 1, alignSelf: 'stretch' }}>
    <TextInput
      style={{ height: 25, borderWidth: 1, alignSelf: 'stretch' }}
      value={player.name}
      onChangeText={text => player.changeName(text)}
    />
    <Button onPress={onPressRemove}><Text>X</Text></Button>
  </View>
));

export default EntryBlock;
