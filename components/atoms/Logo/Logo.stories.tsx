import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Logo from "./Logo"
import { LogoInterface, LogoSize  } from "./Logo.interface"
import LogoStyle from "./Logo.style"

const LogoMeta: ComponentMeta<typeof Logo> = {
    title: "BOVAL/Atoms/Logo",
    component: Logo,
    argTypes: {
        size: {
            options: Object.values(LogoSize),
            mapping: Object.values(LogoSize),
            control: {
                labels: Object.keys(LogoSize),
                values: Object.values(LogoSize),
                type: 'select'
            }
        },
    }
}

const Template: Story<LogoInterface> = (args) => <Logo {...args} />

export const BaseLogo = Template.bind({})
BaseLogo.args = {
    size: LogoSize.regular
}



export default LogoMeta
