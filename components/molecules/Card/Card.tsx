import { View } from "react-native"
import CardStyle from "./Card.style"
import {CardInterface} from "./Card.interface";

const Card = ({children}: CardInterface) => {

    return(
        <View style={CardStyle.default}>
            { children}
        </View>
    )

}

export default Card