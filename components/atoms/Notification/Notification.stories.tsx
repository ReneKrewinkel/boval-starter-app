import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Notification from "./Notification"
import { NotificationInterface  } from "./Notification.interface"
import NotificationStyle from "./Notification.style"

const NotificationMeta: ComponentMeta<typeof Notification> = {
    title: "BOVAL/Atoms/Notification",
    component: Notification,
}

const Template: Story<NotificationInterface> = (args) => <Notification {...args} />

export const Error= Template.bind({})
Error.args = {
    type: "error",
    code: "001",
    msg: "Notification Message"
}

export const Warning = Template.bind({})
Warning.args = {
    type: "warning",
    code: "001",
    msg: "Notification Message"
}

export const Success = Template.bind({})
Success.args = {
    type: "success",
    code: "001",
    msg: "Notification Message"
}




export default NotificationMeta
