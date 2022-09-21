import { Text, View } from "react-native"
import { NotificationInterface } from "./Notification.interface"
import NotificationStyle from "./Notification.style"
//import { MaterialIcons } from '@expo/vector-icons'


/// Niet echt een atom, maar bestaat niet echt uit onderdelen.
/// Formeel icon, en text/text ook als "atom" opnemen.
const Notification = ({ code, msg}: NotificationInterface ) => {

    return(
        <View style={NotificationStyle.default}>
            {/*<MaterialIcons name="error-outline"*/}
            {/*               size={ NotificationStyle.default.icon.size }*/}
            {/*               style={NotificationStyle.default.icon } />*/}
            <Text style={NotificationStyle.default.bold}>{ code }</Text>
            <Text style={NotificationStyle.default.text}>{ msg }</Text>
        </View>
    )

}

export default Notification