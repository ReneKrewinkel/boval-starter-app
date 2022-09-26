import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { IconInterface } from './Icon.interface'
import { IconStyle } from './Icon.style'

const Icon = (props:IconInterface) => {
  
  return(
        <View testID={ props.testID }
              style={[IconStyle.default]}>

        </View>
  )
  
}

export default Icon