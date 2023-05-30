import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

type CardStyles = {
  container: ViewStyle;
  content: ViewStyle;
  title: TextStyle;
  reward: TextStyle;
};

export const styles = StyleSheet.create<CardStyles>({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reward: {
    fontSize: 14,
  },
});
