import React from 'react';
import { TextInput, TextInputProperties } from 'react-native';

interface Props extends TextInputProperties {}

const CommonTextInput = (props: Props) => <TextInput {...props} />;

export default CommonTextInput;
