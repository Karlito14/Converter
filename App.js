import { View, Text, ImageBackground } from 'react-native';
import { styles } from './App.style';
import cold from './assets/cold.png';
import hot from './assets/hot.png';
import { useState } from 'react';
import { Input } from './components/Input/Input';

export default function App() {
  const [inputValue, setInputValue] = useState("0");

  return (
    <ImageBackground source={cold} style={styles.container}>
      <View style={styles.content}>
        <Text>{inputValue}</Text>
        <Input value={inputValue} updateValue={setInputValue} />
        <Text>Button</Text>
      </View>
    </ImageBackground>
  );
}
