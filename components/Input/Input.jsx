import { Text, TextInput, View } from 'react-native';
import { inputStyles } from './Input.style';

export const Input = ({ defaultValue, updateValue, unit }) => {
  return (
    <View style={inputStyles.container}>
      <TextInput
        style={inputStyles.input}
        defaultValue={defaultValue}
        keyboardType="numeric"
        onChangeText={updateValue}
        placeholder="Tape une température"
        maxLength={4}
      />
      <Text style={inputStyles.unit}>{unit}</Text>
    </View>
  );
};
