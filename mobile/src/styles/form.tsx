import { StyleSheet } from 'react-native';
import { THEME } from './theme';

export const styles = StyleSheet.create({
  title: {
    fontSize: THEME.FONT_SIZE_M,
    textAlign: 'center',
  },
  input: {
    height: 40,
    margin: THEME.GAP_SIZE_S,
    borderWidth: 1,
    padding: THEME.GAP_SIZE_S,
  },
  textarea: {
    height: 120,
    margin: THEME.GAP_SIZE_S,
    borderWidth: 1,
    padding: THEME.GAP_SIZE_S,
  },
  button: {
    padding: THEME.GAP_SIZE_S,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: THEME.GAP_SIZE_S,
    paddingHorizontal: THEME.GAP_SIZE_L,
    margin: THEME.GAP_SIZE_L,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: THEME.GREY_COLOR,
  },
  buttonText: {
    fontSize: THEME.FONT_SIZE_S,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: THEME.MAIN_COLOR,
  },
});
