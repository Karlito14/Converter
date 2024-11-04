import { View, Text, ImageBackground } from 'react-native';
import { styles } from './App.style';
import cold from './assets/cold.png';
import hot from './assets/hot.png';


export default function App() {
  return (
    <ImageBackground source={cold} style={styles.container}>
      <View style={styles.content}>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
      </View>
    </ImageBackground>
  );
}
