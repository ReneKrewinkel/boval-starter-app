/// secureTextEntry
import { TextInput } from "react-native"
import { useState } from "react"
import {InputInterface} from "./Input.interface"

const Input = ({ value, type, style, action }: InputInterface) => {

    const [inputValue, setValue] =  useState(value)
    const isPassword = type === "password"

    const onChange = (e: string) => {
        setValue(e)
        action(e)
    }

    return(
        <TextInput
            secureTextEntry={isPassword}
            style={[style]}
            onChangeText={ onChange }
            value={ inputValue }
        />
    )


}


export default Input