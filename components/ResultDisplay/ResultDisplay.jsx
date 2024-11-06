import { Text } from "react-native";
import { temperatureStyles } from "./ResultDisplay.style";

export const TemperatureDisplay = ({temperature, unit}) => {
    return(
        <Text style={temperatureStyles.temperature}>{temperature} {unit}</Text>
    )
}