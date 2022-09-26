import { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { ListInterface } from './List.interface'
import { ListStyle } from './List.style'

const List = (props:ListInterface) => {
  
  return(
        <View testID={ props.testID }
              style={[ListStyle.default]}>

        </View>
  )
  
}

export default List