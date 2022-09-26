import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Label from "./Label"
import { LabelInterface } from "./Label.interface"
import {LabelStyle} from "./Label.style"

const LabelMeta: ComponentMeta<typeof Label> = {
    title: "BOVAL/Atoms/Label",
    component: Label,
}


const Template: Story<LabelInterface> = (args) => <Label {...args} />

export const Default = Template.bind({})
Default.args = {
    text: "Default",
    style: LabelStyle.default
}

export const Bold = Template.bind({})
Bold.args = {
    text: "Bold",
    style: LabelStyle.bold
}

export const Action = Template.bind({})
Action.args = {
    text: "Action",
    style: LabelStyle.boldCenter
}


export default LabelMeta
