import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react-native"
import Button from "./Button"
import { ButtonInterface  } from "./Button.interface"
import ButtonStyle from "./Button.style"

const ButtonMeta: ComponentMeta<typeof Button> = {
    title: "Atoms/Button",
    component: Button,
}


const Template = (args: ButtonInterface) => <Button {...args} />

export const Primary = Template.bind({})
// @ts-ignore
Primary.args = {
    text: "Oke",
    style: ButtonStyle.primary
}

export const Secondary = Template.bind({})
// @ts-ignore
Secondary.args = {
    text: "Annuleren",
    style: ButtonStyle.secondary
}


export default ButtonMeta
