import React from "react"
import { Story, ComponentMeta } from "@storybook/react"
import { View } from "react-native"
import Card from "./Card"
import { CardInterface  } from "./Card.interface"
import CardStyle from "./Card.style"

/// Content

import Label, { LabelStyle } from "../../atoms/Label"
import { Text } from "../../atoms/Input/Input.stories"
import Input, { InputStyle } from "../../atoms/Input"
import Button, { ButtonStyle } from "../../atoms/Button"

const CardMeta: ComponentMeta<typeof Card> = {
    title: "BOVAL/Molecules/Card",
    component: Card,
}

const func = (e: string) => e

// @ts-ignore
const Template: Story<CardInterface> = (args) => <Card {...args} />

export const Login = Template.bind({})
Login.args = {
  children: [
      <Label text={"Gebruikersnaam"} style={LabelStyle.default}/>,
      <Text value={""} required={ true } type={"text"} style={InputStyle.default} action={ func } />,
      <Label text={"Wachtwoord"} style={LabelStyle.default}/>,
      <Text value={""} required={ true } type={"password"} style={InputStyle.default} action={ func } />,
      <Button text={"Login"} style={ButtonStyle.primary} action={ func }/>
  ]
}

export default CardMeta
