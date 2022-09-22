import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { TemplateInterface } from './Template.interface'
import TemplateStyle from './Template.style'
import LoginPage from "../../pages/LoginPage"

const Template = ({ size }:TemplateInterface) => {
  
  return(
        <View style={[TemplateStyle.default, TemplateStyle.iphone13]}>
            <LoginPage />
        </View>
  )
  
}

export default Template