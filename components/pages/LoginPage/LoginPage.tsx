import { View } from 'react-native'
import Login from "../../organisms/Login"
import LoginPageStyle from "./LoginPage.style";

const LoginPage = (props: any) => {

    const goHome = (user: any) => {
        props.navigation.navigate("Homepage", { user: user})
    }

    return(
        <View style={[LoginPageStyle.default, LoginPageStyle.loginScreen]}>
            <Login nav={ goHome } />
        </View>
    )

}

export default  LoginPage