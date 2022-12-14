import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import LoginScreen from "./Login"
import { LoginInterface } from "./Login.interface"

const LoginMeta: ComponentMeta<typeof LoginScreen> = {
    title: "BOVAL/Organisms/Blocks",
    component: LoginScreen,
}


const Template: Story<LoginInterface> = (args: any) => <LoginScreen {...args} />

export const LoginBlock = Template.bind({})
// @ts-ignore
LoginBlock.args  = {
    nav: null
}

LoginBlock.parameters = {
    docs: {
        source: {
            code: 'const whatever = () => {' +
                '}',
            language: "javascript",
            type: "auto"
        }
    }
}


export default LoginMeta