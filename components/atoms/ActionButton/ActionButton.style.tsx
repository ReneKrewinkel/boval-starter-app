import tokens from '../../../resources/style/tokens'

const ActionButtonStyle: any = {

    view: {
        flex: 1,
        alignItems: 'center',
    },

    default: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: tokens.borderRadius.s
    },

    red: {
        backgroundColor: tokens.colors.colorRed
    },

    yellow: {
        backgroundColor: tokens.colors.colorYellow
    },

    green: {
        backgroundColor: tokens.colors.colorGreen
    },

    text: {
        fontSize: tokens.fontSize.s,
        margin: tokens.margin.s,
        fontFamily: "main-text-regular",
    }

}

export { ActionButtonStyle }