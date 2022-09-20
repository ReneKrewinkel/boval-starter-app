import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Input from "./Input"
import { InputInterface  } from "./Input.interface"
import InputStyle from "./Input.style"

const InputMeta: ComponentMeta<typeof Input> = {
    title: "BOVAL/Atoms/Input",
    component: Input,
    argTypes: {
        required: { control: { type: 'boolean'} },
        type: { control: { type: 'select'} },
        regex: { control: { type: 'regex'} }
    }
}


const Template: Story<InputInterface> = (args) => <Input {...args} />

export const Text = Template.bind({})
Text.args = {
    value: "Mijn Naam",
    required: true,
    type: "text",
    style: InputStyle.default,
    action:  () => "Mijn Naam"
}


export const Password = Template.bind({})
Password.args = {
    value: "topSecret123",
    required: true,
    type: "password",
    style: InputStyle.default,
    action: () => "topSecret123"
}

export const Number = Template.bind({})
Number.args = {
    value: "100.50",
    required: false,
    type: "number",
    style: InputStyle.default,
    action: undefined
}

export const Email = Template.bind({})
Email.args = {
    value: "firstname.lastname@boval.nl",
    required: true,
    type: "email",
    style: InputStyle.default,
    regex: /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/,
    action: () => "firstname.lastname@boval.nl"
}


export default InputMeta
