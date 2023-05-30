import {CardProps} from './types';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';

export const Card = (props: CardProps) => {
  const {card, onCardPress} = props;

  const handlePress = () => {
    onCardPress();
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handlePress}>
      <View style={styles.content}>
        <Text style={styles.title}>{card.name}</Text>
        <Text style={styles.reward}>{`Reward: ${card.reward}`}</Text>
      </View>
    </TouchableOpacity>
  );
};
