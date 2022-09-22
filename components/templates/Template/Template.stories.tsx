import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import Template from "./Template"
import { TemplateInterface  } from "./Template.interface"
import TemplateStyle from "./Template.style"

const TemplateMeta: ComponentMeta<typeof Template> = {
    title: "BOVAL/Templates",
    component: Template,    
}


const PhoneTemplate: Story<TemplateInterface> = (args) => <Template {...args} />

export const iPhone13 = PhoneTemplate.bind({})
iPhone13.args = {
    size: "iphone13"
}

export default TemplateMeta