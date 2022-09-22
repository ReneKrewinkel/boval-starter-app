import tokens from '../../../resources/style/tokens'

const TemplateStyle: any = {

    default: {
        //borderWidth: 1,
        borderRadius: 25,
        backgroundColor: tokens.screen.backgroundColor,
        margin: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.35,
        shadowRadius: 20,
        elevation: 8,
    },

    iphone13: {
      width: 390,
      height: 844
    }

}

export default TemplateStyle