import { StyleSheet } from 'react-native';
import { THEME } from './theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    backgroundColor: THEME.MAIN_COLOR,
    height: 40,
    borderRadius: 5,
    fontSize: THEME.FONT_SIZE_M,
    justifyContent: 'center',
    alignItems: 'center',
    margin: THEME.GAP_SIZE_XL,
  },
});
