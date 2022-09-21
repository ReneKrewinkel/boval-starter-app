import tokens from '../../../resources/style/tokens'


const NotificationStyle: any = {

    default: {
        borderWidth: 1,
        borderColor: tokens.colors.colorRed,
        backgroundColor: tokens.colors.colorRedTransparent,
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
    }
}

export default NotificationStyle