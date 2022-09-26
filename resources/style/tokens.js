import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window")

const colors = {
    colorBlack: "#000",
    colorWhite: "#FFF",
    colorTransparent: "transparent",
    colorBrandLight: "#e8effc",
    colorBrandDark: "#1e4799",
    colorMuted: "#D6D6D6",
    colorRed: "rgb(237,110,105)",
    colorRedTransparent: "rgba(237,110,105,0.2)",
    colorGreen: "rgb(140,220,77)",
    colorGreenTransparent: "rgba(140,220,77,0.2)",
    colorYellow: "rgb(248, 207, 101)",
    colorYellowTransparent: "rgba(248, 207, 101, 0.2)"
}

const fonts = {
    "main-text-regular": require('../fonts/poppins_regular.ttf'),
    "main-text-medium": require('../fonts/poppins_medium.ttf'),
    "main-text-bold": require('../fonts/poppins_bold.ttf')
}

const tokens = {

    base: {
        width: width,
        height: height,
        oneQuaterHeight: height / 4,
        oneFifthHeight: height / 5,
        oneSixthHeight: height / 6,
        oneSeventhHeight: height / 7,
        oneEighthHeight: height / 8
    },

    logo: {
        default: { size: "200" },
    },

    borderRadius: {
        xs: 10,
        s: 12,
        m: 15,
        l: 20
    },

    screen: {
        flex: 1,
        backgroundColor: colors.colorBrandLight
    },

    colors: colors,
    fontFamily: fonts,

    fontSize: {
        xxs: 6,
         xs: 8,
          s: 10,
    default: 14,
          m: 16,
          l: 18,
         xl: 20,
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