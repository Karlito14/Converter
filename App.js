import { View, Text, ImageBackground } from 'react-native';
import { useState } from 'react';
import { styles } from './App.style';
import cold from './assets/cold.png';
import hot from './assets/hot.png';
import { DEFAULT_VALUE, UNITS } from './constants';
import { converter, getOpposit } from './services/converter';
import { Input } from './components/Input/Input';
import { TemperatureDisplay } from './components/TemperatureDisplay/TemperatureDisplay';
import { ButtonChange } from './components/ButtonChange/ButtonChange';

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_VALUE);
  const [currentUnit, setCurrentUnit] = useState(UNITS.celcius);

  const imageBackground = () => {
    if (+inputValue >= 15 && currentUnit === UNITS.celcius) {
      return hot;
    } else if (+inputValue >= 59 && currentUnit === UNITS.faranheit) {
      return hot;
    } else {
      return cold;
    }
  };

  const switchUnit = () => {
    setCurrentUnit(getOpposit(currentUnit));
  };

  return (
    <ImageBackground source={imageBackground()} style={styles.container}>
      <View style={styles.content}>
        <TemperatureDisplay
          temperature={converter(inputValue, currentUnit)}
          unit={getOpposit(currentUnit)}
        />
        <Input
          defaultValue={DEFAULT_VALUE}
          updateValue={setInputValue}
          unit={currentUnit}
        />
        <ButtonChange unit={currentUnit} onClick={switchUnit} />
      </View>
    </ImageBackground>
  );
}
