import { View, Text, ImageBackground } from 'react-native';
import { styles } from './App.style';
import cold from './assets/cold.png';
import hot from './assets/hot.png';
import { useState } from 'react';
import { Input } from './components/Input/Input';
import { TemperatureDisplay } from './components/TemperatureDisplay/TemperatureDisplay';
import { DEFAULT_VALUE, UNITS } from './constants';
import { converter, getOpposit } from './services/converter';

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_VALUE);
  const [currentUnit, setCurrentUnit] = useState(UNITS.celcius);

  return (
    <ImageBackground source={cold} style={styles.container}>
      <View style={styles.content}>
        <TemperatureDisplay temperature={converter(inputValue, currentUnit)} unit={getOpposit(currentUnit)} />
        <Input
          defaultValue={DEFAULT_VALUE}
          updateValue={setInputValue}
          unit={currentUnit}
        />
        <Text>Button</Text>
      </View>
    </ImageBackground>
  );
}
