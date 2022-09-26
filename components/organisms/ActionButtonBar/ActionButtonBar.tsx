import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { ActionButtonBarInterface } from './ActionButtonBar.interface'
import { ActionButtonBarStyle } from './ActionButtonBar.style'
import ActionButton, {ActionButtonStyle} from "../../atoms/ActionButton";

const ActionButtonBar = (props:ActionButtonBarInterface) => {
  
  return(
        <View style={ActionButtonBarStyle.default}>
            <ActionButton style={ActionButtonStyle.red}
                          label={"Red"}
                          action={() => "red"} />

            <ActionButton style={ActionButtonStyle.yellow}
                          label={"Yellow"}
                          action={() => "yellow"} />

            <ActionButton style={ActionButtonStyle.green}
                          label={"Green"}
                          action={() => "green"} />
        </View>
  )
  
}

export default ActionButtonBar