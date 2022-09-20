import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window")

const colors = {
    colorBlack: "#000",
    colorWhite: "#FFF",
    colorTransparent: "transparent",
    colorBrandLight: "#e8effc",
    colorBrandDark: "#1e4799",
    colorMuted: "#D6D6D6",
}

const tokens = {

    screen: {
        width: width,
        height: height,
        oneQuaterHeight: (height / 4),
        flex: 1,
        backgroundColor: colors.colorBrandLight
    },

    colors: colors,

    fontSize: {
        xxs: 6,
         xs: 8,
          s: 10,
    default: 12,
          m: 14,
          l: 16,
         xl: 18,
        xxl: 20
    },

    fontWeight: {
        normal: "normal",
        bold: "bold"
    },

    margin: {
        xxs: 1,
        xs: 2,
        s: 4,
        m: 6,
        l: 20,
        xl: 10,
        xxl: 12
    },

    padding: {
        xxs: 1,
        xs: 2,
        s: 4,
        m: 6,
        l: 20,
        xl: 30,
        xxl: 40
    }


}

export default tokens