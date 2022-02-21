import { StyleSheet } from 'react-native';
import { THEME } from './theme';

export const styles = StyleSheet.create({
  container: {
    padding: THEME.GAP_SIZE_S,
  },
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tittle: {
    fontSize: THEME.FONT_SIZE_XL,
    marginBottom: THEME.GAP_SIZE_S,
    textAlign: 'center',
  },
  button: {
    display: 'flex',
    backgroundColor: THEME.MAIN_COLOR,
    height: 40,
    borderRadius: 5,
    fontSize: THEME.FONT_SIZE_M,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
