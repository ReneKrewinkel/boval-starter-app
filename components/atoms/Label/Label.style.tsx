import tokens from '../../../resources/style/tokens'

const LabelStyle: any = {

    default: {
        fontFamily: "main-text-regular",
        fontSize: tokens.fontSize.default,
        color: tokens.colors.colorBlack,
        margin: tokens.margin.xs,
        padding: tokens.padding.xs,
        fontWeight: tokens.fontWeight.normal,
    },

    bold: {
        fontFamily: "main-text-bold",
        fontWeight: tokens.fontWeight.bold
    },

    boldCenter: {
        fontWeight: tokens.fontWeight.bold,
        fontFamily: "main-text-bold",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
}

export { LabelStyle }