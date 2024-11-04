import { Text, TextInput, View } from 'react-native';
import { inputStyles } from './Input.style';

export const Input = ({ value, updateValue }) => {
  return (
    <View style={inputStyles.container}>
      <TextInput
        style={inputStyles.input}
        defaultValue={value}
        keyboardType="numeric"
        onChangeText={updateValue}
        placeholder="Tape une température"
        maxLength={4}
      />
      <Text style={inputStyles.unit}>°C</Text>
    </View>
  );
};
