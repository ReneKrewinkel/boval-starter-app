import { View, Text} from "react-native"
/// Card
import Card from "../../molecules/Card"
import CardStyle from "../../molecules/Card/Card.style"

/// Content
import Label from "../../atoms/Label"
import LabelStyle from "../../atoms/Label/Label.style"

import Input from "../../atoms/Input"
import InputStyle from "../../atoms/Input/Input.style"

import Button from "../../atoms/Button"
import ButtonStyle from "../../atoms/Button/Button.style"
import React, { useState } from "react";
import { userLogin } from "../../../lib/API";

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
                console.warn(result)
                nav(result)
            })
            .catch(err => {
                setError(true)
            })
    }

    return(
        <Card>

            <Label text="Gebruikersnaam" style={LabelStyle.default}/>
            <Input value={""}
                   type={"text"}
                   style={InputStyle.default}
                   action={setLoginName} />

            <Label text={"Wachtwoord"} style={LabelStyle.default}/>
            <Input value={""}
                   type={"password"}
                   style={InputStyle.default}
                   action={setPassword} />


            <Button text="Login"
                    style={ButtonStyle.primary}
                    action={loginAction}/>

            { isError && <View><Text>Error</Text></View>}
        </Card>
    )


}

export default Login