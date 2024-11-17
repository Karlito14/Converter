import { Text, TouchableOpacity } from 'react-native';
import { buttonStyles } from './ButtonChange.style';

export const ButtonChange = ({ unit, onClick }) => {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={() => onClick(unit)}>
      <Text style={buttonStyles.text}>Convertir en {unit}</Text>
    </TouchableOpacity>
  );
};
