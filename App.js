
import { View, Text } from 'react-native'
import { useEffect, useState} from "react"

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { fetchUserKey} from "./lib/API"
import Homepage from './components/pages/Homepage'
import LoginPage from "./components/pages/LoginPage"

const Stack = createNativeStackNavigator();

const App = () => {

    const [isLoaded, setLoaded] = useState(false)
    const [initialRoute, setInitialRoute] = useState("")
    const options = {
        headerShown: false
    }

    useEffect( () => {
        fetchUserKey()
            .then( result => {
                setLoaded(true)
                setInitialRoute("Homepage")
            })
            .catch(err => {
                setLoaded(true)
                setInitialRoute("Login")
            })

    }, [])

    const renderContent = () => {
        if(isLoaded && initialRoute !== "") {
            //alert(initialRoute)
            return(
                <NavigationContainer>
                <Stack.Navigator screenOptions={options}
                                 intialRouteName={ initialRoute }>
                    { initialRoute === "Login" && <Stack.Screen name="Login" component={LoginPage} replace={true} /> }
                    <Stack.Screen name="Homepage" component={Homepage} replace={true} />
                </Stack.Navigator>
                </NavigationContainer>
            )
        }
    }

  return (
        <>
          { renderContent() }
        </>
  )
}

export default App