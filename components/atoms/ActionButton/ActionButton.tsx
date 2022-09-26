import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { ActionButtonInterface } from './ActionButton.interface'
import {ActionButtonStyle} from './ActionButton.style'

const ActionButton = ({ style, label, action }:ActionButtonInterface) => {

      const buttonPressed = () => {
            action()
      }

      return(
            <View style={ActionButtonStyle.view}>
                <TouchableOpacity style={[ActionButtonStyle.default, style]}>
                    <Text style={{color: "#FFF", fontSize: 11}}>Icon</Text>
                </TouchableOpacity>
                <Text style={ ActionButtonStyle.text }>{ label }</Text>
            </View>
      )
  
}

export default ActionButton