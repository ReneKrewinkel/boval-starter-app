import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import ActionButtonBar from "./ActionButtonBar"
import { ActionButtonBarInterface  } from "./ActionButtonBar.interface"
import {ActionButtonBarStyle} from "./ActionButtonBar.style"

const ActionButtonBarMeta: ComponentMeta<typeof ActionButtonBar> = {
    title: "BOVAL/Organisms/Blocks",
    component: ActionButtonBar,    
}


const Template: Story<ActionButtonBarInterface> = (args) => <ActionButtonBar {...args} />

export const ButtonBar = Template.bind({})


export default ActionButtonBarMeta