import tokens from '../../../resources/style/tokens'


const NotificationStyle: any = {

    default: {
        borderWidth: 1,
        padding: tokens.padding.m,
        marginLeft: tokens.margin.l,
        marginRight:tokens.margin.l,
        marginBottom:tokens.margin.xl,
        borderRadius: tokens.borderRadius.s,
        alignItems: "center",
        flexDirection: "row",

        text: {
            fontSize: tokens.fontSize.m,
            margin: tokens.margin.s,
        },

        bold: {
            fontSize: tokens.fontSize.m,
            fontWeight: tokens.fontWeight.bold,
            margin: tokens.margin.s,
        },

        icon: {
            size: tokens.fontSize.xxl,
            color: tokens.colors.colorRed
        }
    },

    error: {
        borderColor: tokens.colors.colorRed,
        backgroundColor: tokens.colors.colorRedTransparent,
    },

    warning: {
        borderColor: tokens.colors.colorYellow,
        backgroundColor: tokens.colors.colorYellowTransparent,
    },

    success: {
        borderColor: tokens.colors.colorGreen,
        backgroundColor: tokens.colors.colorGreenTransparent,
    }
}

export default NotificationStyle