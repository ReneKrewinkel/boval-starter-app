import tokens from '../../../resources/style/tokens'
import {RegisteredStyle} from "react-native";

const LoginPageStyle: any = {

    default: {
        ...tokens.screen,
        justifyContent:'flex-start'
    },

    loginScreen: {
        paddingTop: tokens.base.oneEighthHeight
    }

}

export default LoginPageStyle