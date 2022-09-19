import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react-native"
import Input from "./Input"
import { InputInterface  } from "./Input.interface"
import InputStyle from "./Input.style"

const InputMeta: ComponentMeta<typeof Input> = {
    title: "Atoms/Input",
    component: Input,
}


const Template = (args: InputInterface) => <Input {...args} />

export const Text = Template.bind({})
// @ts-ignore
Text.args = {
    value: "Mijn Naam",
    type: "text",
    style: InputStyle.default,
    action: null
}


export const Password = Template.bind({})
// @ts-ignore
Password.args = {
    value: "topSecret123",
    type: "password",
    style: InputStyle.default,
    action: null
}

export const Number = Template.bind({})
// @ts-ignore
Number.args = {
    value: "100.50",
    type: "number",
    style: InputStyle.default,
    action: null
}



export default InputMeta
