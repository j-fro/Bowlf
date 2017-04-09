import React from 'react';
import { View, TextInput } from 'react-native';

type Props = { name: string };

const EntryBlock = (props: Props) => (
  <View style={{ flex: 1, alignSelf: 'stretch' }}>
    <TextInput style={{ height: 25, borderWidth: 1, alignSelf: 'stretch' }} value={props.name} />
  </View>
);

export default EntryBlock;
