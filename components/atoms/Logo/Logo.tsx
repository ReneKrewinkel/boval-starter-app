import { Image, View, Text } from "react-native"
import LogoStyle from "./Logo.style"
import { LogoInterface } from "./Logo.interface"
const logo = require('../../../resources/images/logo.png')

const Logo = ({ size }: LogoInterface ) => {

    const s = parseInt(size)

    return(
        <View style={[LogoStyle.default]}>
            <Image style={[ LogoStyle.logoDefault, { width: s, height: s }]}
                   source={logo}/>
        </View>
    )
}

export default Logo