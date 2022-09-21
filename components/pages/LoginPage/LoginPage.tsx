import { View } from 'react-native'
import Login from "../../organisms/Login"
import LoginPageStyle from "./LoginPage.style"
import Logo from "../../atoms/Logo"

const LoginPage = (props: any) => {

    const goHome = (user: any) => {
        props.navigation.navigate("Homepage", { user: user})
    }

    return(
        <View style={[LoginPageStyle.default, LoginPageStyle.loginScreen]}>
            <Logo />
            <Login nav={ goHome } />
        </View>
    )

}

export default  LoginPage