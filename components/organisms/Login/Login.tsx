import React, { useState } from "react"
import { View, Text } from "react-native"

/// Card
import Card from "../../molecules/Card"

/// Content
import Label, { LabelStyle } from "../../atoms/Label"

import Input, { InputStyle } from "../../atoms/Input"


import Button, { ButtonStyle } from "../../atoms/Button"

import { userLogin } from "../../../lib/API"
import LoginStyle from "./LoginStyle"

import Notification from "../../molecules/Notification"

const Login = ({ nav }:any) => {

    const [loginName, setLoginName] = useState("")
    const [password, setPassword] = useState("")
    const [isError, setError] = useState(false)

    const setLoginNameHandler = (eLoginname:string): void => {
        setLoginName(eLoginname)
    }
    const setPasswordHandler = (ePassword:string): void => {
        setPassword(ePassword)
    }

    const loginAction = (): void => {

        userLogin(loginName, password)
            .then(result => {
                nav(result)
            })
            .catch(err => {
                setError(true)
            })
    }

    return(
        <Card>

            <View style={ LoginStyle.inputGroup }>
                <Label text="Gebruikersnaam" style={LabelStyle.default}/>
                <Input value={""} required={true}
                       type="text"
                       style={InputStyle.default}
                       action={setLoginNameHandler} />
            </View>

            <View style={ LoginStyle.inputGroup }>
                <Label text="Wachtwoord" style={LabelStyle.default}/>
                <Input value="" required={true}
                       type="password"
                       style={InputStyle.default}
                       action={setPasswordHandler} />
            </View>

            <Button text="Login"
                    style={ButtonStyle.primary}
                    action={loginAction}/>

            { isError && <Notification type="error"
                                       code={"0001"} msg={"Error"} /> }
        </Card>
    )


}

export default Login