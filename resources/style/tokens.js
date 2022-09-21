import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window")

const colors = {
    colorBlack: "#000",
    colorWhite: "#FFF",
    colorTransparent: "transparent",
    colorBrandLight: "#e8effc",
    colorBrandDark: "#1e4799",
    colorMuted: "#D6D6D6",
    colorRed: "#F00",
    colorRedTransparent: "rgba(255,0,0,0.2)"
}

const tokens = {

    base: {
        width: width,
        height: height,
        oneQuaterHeight: height / 4,
        oneFifthHeight: height / 5,
        oneSixthHeight: height / 6,
        oneSeventhHeight: height / 7,
    },

    logo: {
        small: { size: 100 },
        default: { size: 200 },
        large: { size: 400 }
    },

    borderRadius: {
        s: 10
    },

    screen: {
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
        xxl: 24
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
        m: 10,
        l: 20,
        xl: 30,
        xxl: 40
    }


}

export default tokens