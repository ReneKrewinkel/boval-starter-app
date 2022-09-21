import { Image, View } from "react-native"
import LogoStyle from "./Logo.style"
import { LogoInterface } from "./Logo.interface"
const logo = require('../../../resources/images/logo.png')

const Logo = ({ size = 200}: LogoInterface ) => {

    return(
        <View style={[LogoStyle.default]}>
            <Image style={[
                              LogoStyle.logoDefault,
                              { width: size, height: size }
                          ]} source={logo}/>
        </View>
    )
}

export default Logo