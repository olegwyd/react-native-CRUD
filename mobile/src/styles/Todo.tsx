import { StyleSheet } from 'react-native';
import { THEME } from './theme';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: THEME.GAP_SIZE_S,
    backgroundColor: THEME.GREY_COLOR,
    padding: THEME.GAP_SIZE_S,
    borderRadius: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: THEME.FONT_SIZE_L,
    marginBottom: THEME.GAP_SIZE_S,
    textAlign: 'center',
  },
  year: {
    marginLeft: 20,
    fontSize: THEME.FONT_SIZE_S,
    marginBottom: THEME.GAP_SIZE_S,
    textAlign: 'center',
  },
  description: {
    height: THEME.GAP_SIZE_XXL,
    margin: THEME.GAP_SIZE_S,
    borderWidth: 1,
    borderColor: THEME.DANGER_COLOR,
  },
  check: {
    margin: THEME.GAP_SIZE_M,
  },
});
