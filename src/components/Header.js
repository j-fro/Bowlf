import React, { ViewProperties } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const { container, header, text } = styles;

type Props = ViewProperties;

const Header = (props: Props) => (
  <View style={container}>
    <View style={header}>
      <Text style={text}>BOWLF</Text>
    </View>
    {props.children}
  </View>
);

export default Header;
