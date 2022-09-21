import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Logo from "./Logo"
import { LogoInterface  } from "./Logo.interface"
import LogoStyle from "./Logo.style"

const LogoMeta: ComponentMeta<typeof Logo> = {
    title: "BOVAL/Atoms/Logo",
    component: Logo,
}

const Template: Story<LogoInterface> = (args) => <Logo {...args} />

export const BaseLogo = Template.bind({})
// @ts-ignore
BaseLogo.args = {
    size: LogoStyle.default.size
}



export default LogoMeta
