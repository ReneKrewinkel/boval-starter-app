import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Button from "./Button"
import { ButtonInterface  } from "./Button.interface"
import { ButtonStyle } from "./Button.style"

const ButtonMeta: ComponentMeta<typeof Button> = {
    title: "BOVAL/Atoms/Button",
    component: Button,
}


const Template: Story<ButtonInterface> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    text: "Oke",
    style: ButtonStyle.primary
}

export const Secondary = Template.bind({})
Secondary.args = {
    text: "Annuleren",
    style: ButtonStyle.secondary
}


export default ButtonMeta
