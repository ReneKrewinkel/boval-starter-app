import { Text, View } from "react-native"
import { ErrorInterface } from "./Error.interface"
import ErrorStyle from "./Error.style"
//import { MaterialIcons } from '@expo/vector-icons'


/// Niet echt een atom, maar bestaat niet echt uit onderdelen.
/// Formeel icon, en text/text ook als "atom" opnemen.
const Error = ({ code, msg}: ErrorInterface ) => {

    return(
        <View style={ErrorStyle.default}>
            {/*<MaterialIcons name="error-outline"*/}
            {/*               size={ ErrorStyle.default.icon.size }*/}
            {/*               style={ErrorStyle.default.icon } />*/}
            <Text style={ErrorStyle.default.bold}>{ code }</Text>
            <Text style={ErrorStyle.default.text}>{ msg }</Text>
        </View>
    )

}

export default Error