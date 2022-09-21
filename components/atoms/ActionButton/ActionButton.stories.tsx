import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import ActionButton from "./ActionButton"
import { ActionButtonInterface  } from "./ActionButton.interface"
import ActionButtonStyle from "./ActionButton.style"

const ActionButtonMeta: ComponentMeta<typeof ActionButton> = {
    title: "BOVAL/Atoms/ActionButton",
    component: ActionButton,    
}


const Template: Story<ActionButtonInterface> = (args) => <ActionButton {...args} />

export const Red = Template.bind({})
Red.args = {
   style: ActionButtonStyle.red,
   label: "Red Button",
}

export const Yellow = Template.bind({})
Yellow.args = {
    style: ActionButtonStyle.yellow,
    label: "Yellow Button",
}

export const Green = Template.bind({})
Green.args = {
    style: ActionButtonStyle.green,
    label: "Green Button",
}



export default ActionButtonMeta