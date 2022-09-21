import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import LoginPg from "./LoginPage"

const LoginPageMeta: ComponentMeta<typeof LoginPg> = {
    title: "BOVAL/Pages",
    component: LoginPg,
}


const Template: Story = (args: any) => <LoginPg {...args} />

export const LoginPage = Template.bind({})
// @ts-ignore
LoginPage.args  = {
    nav: null
}

export default LoginPageMeta