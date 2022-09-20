import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import LoginScreen from "./Login"
import { LoginInterface } from "./Login.interface"

const LoginMeta: ComponentMeta<typeof LoginScreen> = {
    title: "BOVAL/Organisms/Login",
    component: LoginScreen,
}


const Template: Story<LoginInterface> = (args: any) => <LoginScreen {...args} />

export const Login = Template.bind({})
// @ts-ignore
Login.args  = {
    nav: null
}

export default LoginMeta