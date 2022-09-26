import { TextInput } from "react-native"
import { useState } from "react"
import { InputInterface } from "./Input.interface"
import {InputStyle} from "./Input.style"

const Input = ({ value, required = false, type, style, regex = undefined, action }: InputInterface) => {

    const [inputValue, setValue] =  useState(value)
    const isPassword = type === "password"

    const onChange = (e: string) => {
        /// TODO: if regex validate
        /// TODO: Usage for required. Handle in Organism?

        setValue(e)
        action(e)
    }

    return(
        <TextInput
            secureTextEntry={isPassword}
            style={[InputStyle.default, style]}
            onChangeText={ onChange }
            value={ inputValue }
        />
    )


}


export default Input