import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Icon from "./Icon"
import { IconInterface  } from "./Icon.interface"
import {IconStyle} from "./Icon.style"

const IconMeta: ComponentMeta<typeof Icon> = {
    title: "BOVAL/Atoms/Icon",
    component: Icon,    
}

const testID = "Icon-" + Math.floor(Math.random() * 90000) + 10000

const Template: Story<IconInterface> = (args) => <Icon {...args} />

export const DefaultIcon = Template.bind({})
DefaultIcon.args = {
    testID: testID,
    props: [],
    style: {}
}

export default IconMeta