import { Text, View } from "react-native"
import { NotificationInterface } from "./Notification.interface"
import NotificationStyle from "./Notification.style"
import Label, { LabelStyle }  from "../../atoms/Label"

//import { MaterialIcons } from '@expo/vector-icons'


/// Formeel icon, en text/text ook als "atom" opnemen.
const Notification = ({ type, code, msg}: NotificationInterface ) => {

    const notifyStyle = type === "error" ? NotificationStyle.error :
                                           type === "warning" ? NotificationStyle.warning :                                                NotificationStyle.success;

    return(
        <View style={[NotificationStyle.default, notifyStyle]}>
            {/*<MaterialIcons name="error-outline"*/}
            {/*               size={ NotificationStyle.default.icon.size }*/}
            {/*               style={NotificationStyle.default.icon } />*/}
            <Label style={LabelStyle.bold} text={code} />
            <Label style={LabelStyle.default} text={msg} />
        </View>
    )

}

export default Notification