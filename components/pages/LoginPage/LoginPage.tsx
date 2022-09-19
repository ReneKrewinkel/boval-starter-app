import { View } from 'react-native'

import tokens from "../../../resources/style/tokens"
import Login from "../../organisms/Login"

const LoginPage = (props: any) => {

    const goHome = (user: any) => {
        props.navigation.navigate("Homepage", { user: user})
    }

    return(
        <View style={{
              flex: 1,
              justifyContent: "center",
              backgroundColor: tokens.colors.colorBrandLight
        }}>
            <Login nav={ goHome } />
        </View>
    )

}

export default  LoginPage