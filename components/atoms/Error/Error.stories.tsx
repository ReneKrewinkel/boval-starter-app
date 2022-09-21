import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Error from "./Error"
import { ErrorInterface  } from "./Error.interface"
import ErrorStyle from "./Error.style"

const ErrorMeta: ComponentMeta<typeof Error> = {
    title: "BOVAL/Atoms/Error",
    component: Error,
}

const Template: Story<ErrorInterface> = (args) => <Error {...args} />

export const BaseError = Template.bind({})
// @ts-ignore
BaseError.args = {
    code: "001",
    msg: "Error Message"
}



export default ErrorMeta
