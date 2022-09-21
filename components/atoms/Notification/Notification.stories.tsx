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

export const ErrorNotification = Template.bind({})
ErrorNotification.args = {
    type: "error",
    code: "001",
    msg: "Notification Message"
}

export const WarningNotification = Template.bind({})
WarningNotification.args = {
    type: "warning",
    code: "001",
    msg: "Notification Message"
}

export const SuccessNotification = Template.bind({})
SuccessNotification.args = {
    type: "success",
    code: "001",
    msg: "Notification Message"
}




export default NotificationMeta
