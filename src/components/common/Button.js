// @flow
import React, { TouchableHighlightProperties } from 'react';
import { View, TouchableHighlight } from 'react-native';

type Props = TouchableHighlightProperties;

const Button = (props: Props) => (
  <TouchableHighlight {...props}><View>{props.children}</View></TouchableHighlight>
);

export default Button;
