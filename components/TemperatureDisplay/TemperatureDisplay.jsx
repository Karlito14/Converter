import { Text } from "react-native";
import { temperatureStyles } from "./TemperatureDisplay.style";

export const TemperatureDisplay = ({temperature, unit}) => {
    return(
        <Text style={temperatureStyles.temperature}>{temperature} {unit}</Text>
    )
}