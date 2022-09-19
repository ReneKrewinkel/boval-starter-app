import { View,  Text } from 'react-native'
import { useState } from 'react'
import useFetch from "../../../hooks/useFetch"
import config from "../../../config/config"
import tokens from "../../../resources/style/tokens"

const Homepage = (props: any) => {

    console.warn(props.route.params.user)
    const [data, isLoaded] = useFetch(config.dashboardUrl)

    const renderContent = () => {
        if(isLoaded) {
            //console.warn(data)
            return(
                <View><Text>Data is geladen!!!</Text></View>
            )
        }
    }
    return(
        <View style={{
            flex: 1,
            justifyContent: "center",
            backgroundColor: tokens.colors.colorBrandLight
        }}>
            { renderContent() }
        </View>
    )

}

export default Homepage