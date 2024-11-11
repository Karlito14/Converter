import {
  View,
  ImageBackground,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useState } from 'react';

import { styles } from './App.style';

import cold from './assets/cold.png';
import hot from './assets/hot.png';
import distance from './assets/distance.png';
import balance from './assets/balance.png';

import { DEFAULT_VALUE, UNITS } from './constants';
import { converter, getOpposit } from './services/converter';

import { Input } from './components/Input/Input';
import { TemperatureDisplay } from './components/ResultDisplay/ResultDisplay';
import { ButtonChange } from './components/ButtonChange/ButtonChange';
import { ListMeasure } from './components/ListMeasure/ListMeasure';

export default function App() {
  const [inputValue, setInputValue] = useState(DEFAULT_VALUE);
  const [currentUnit, setCurrentUnit] = useState(UNITS.celcius);

  const imageBackground = () => {
    if (+inputValue >= 15 && currentUnit === UNITS.celcius) {
      return hot;
    } else if (+inputValue >= 59 && currentUnit === UNITS.faranheit) {
      return hot;
    } else if (currentUnit === UNITS.kilo || currentUnit === UNITS.livre) {
      return balance;
    } else if (currentUnit === UNITS.kilometre || currentUnit === UNITS.miles) {
      return distance;
    } else {
      return cold;
    }
  };

  const switchUnit = () => {
    setCurrentUnit(getOpposit(currentUnit));
  };

  const switchValue = (value) => {
    switch (value) {
      case 'temp':
        setCurrentUnit(UNITS.celcius);
        break;
      case 'distance':
        setCurrentUnit(UNITS.kilometre);
        break;
      case 'weight':
        setCurrentUnit(UNITS.kilo);
        break;
      default:
        setCurrentUnit(UNITS.celcius);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={imageBackground()} style={styles.container}>
        <View style={styles.contentList}>
          <ListMeasure onClick={switchValue} />
        </View>
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
    </TouchableWithoutFeedback>
  );
}
