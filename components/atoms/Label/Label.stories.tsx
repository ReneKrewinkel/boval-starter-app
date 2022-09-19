import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react-native"
import Label from "./Label"
import { LabelInterface } from "./Label.interface"
import LabelStyle from "./Label.style"

const LabelMeta: ComponentMeta<typeof Label> = {
    title: "Atoms/Label",
    component: Label,
}


const Template = (args: LabelInterface) => <Label {...args} />

export const Default = Template.bind({})
// @ts-ignore
Default.args = {
    text: "Default",
    style: LabelStyle.default
}

export const Bold = Template.bind({})
// @ts-ignore
Bold.args = {
    text: "Bold",
    style: LabelStyle.bold
}

export const Action = Template.bind({})
// @ts-ignore
Action.args = {
    text: "Bold",
    style: LabelStyle.boldCenter
}


export default LabelMeta
