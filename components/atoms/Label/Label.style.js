import tokens from '../../../resources/style/tokens'

const LabelStyle = {

    default: {
        fontSize: tokens.fontSize.default,
        color: tokens.colors.colorBlack,
        margin: tokens.margin.xs,
        padding: tokens.padding.xs,
        fontWeight: tokens.fontWeight.normal,
    },

    bold: {
        fontWeight: tokens.fontWeight.bold
    },

    boldCenter: {
        fontWeight: tokens.fontWeight.bold,
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }



}

export default LabelStyle