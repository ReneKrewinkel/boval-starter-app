import { Text } from "react-native"
import { LabelInterface } from './Label.interface'
import LabelStyle from "./Label.style";

const Label = ({ text, style }: LabelInterface) => {
    return(
        <Text style={[LabelStyle.default, style]}>{ text }</Text>
    )
}

export default Label