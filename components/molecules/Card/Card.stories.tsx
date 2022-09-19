import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react-native"
import { View } from "react-native"
import Card from "./Card"
import { CardInterface  } from "./Card.interface"
import CardStyle from "./Card.style"

/// Content
import Label from "../../atoms/Label"
import LabelStyle from "../../atoms/Label/Label.style"

import Input from "../../atoms/Input"
import InputStyle from "../../atoms/Input/Input.style"

import Button from "../../atoms/Button"
import ButtonStyle from "../../atoms/Button/Button.style"

const CardMeta: ComponentMeta<typeof Card> = {
    title: "Molecules/Card",
    component: Card,
}

const LoginContent = <View>
    <Label text={"Gebruikersnaam"} style={LabelStyle.default}/>
    <Input value={""} type={"text"} style={InputStyle.default} action={null} />
    <Label text={"Wachtwoord"} style={LabelStyle.default}/>
    <Input value={""} type={"password"} style={InputStyle.default} action={null} />
        <Button text={"Login"} style={ButtonStyle.primary} action={null}/>

</View>

// @ts-ignore
const Template = (args: CardInterface) => <Card {...args} />

export const Login = Template.bind({})
// @ts-ignore
Login.args = {
  children: LoginContent
}

export default CardMeta
