import { StyleSheet } from 'react-native';
import { primaryBgColor, primaryColor } from '../config/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: { paddingTop: 30, paddingBottom: 15, backgroundColor: primaryColor },
  text: { color: primaryBgColor },
});
