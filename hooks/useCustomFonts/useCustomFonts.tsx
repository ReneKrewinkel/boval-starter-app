import { useState } from 'react'
import { useFonts } from 'expo-font'
import tokens from '../../resources/style/tokens'

const useCustomFonts = () => {

        const [isLoaded, setLoaded] = useState(false)
        const fontsLoaded = useFonts(tokens.fontFamily)

        return(fontsLoaded)
}

export default useCustomFonts