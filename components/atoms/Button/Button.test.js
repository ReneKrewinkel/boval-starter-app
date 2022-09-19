import React from 'react'
import { render } from '@testing-library/react-native'

import { Primary, Secondary } from "./Button.stories";
import ButtonStyle from "./Button.style"


describe("Button", () => {

    it("Can render a primary Button", () => {
        let { getByText } = render(<Primary text="Login" style={ ButtonStyle.primary } action={null} />)
        let ButtonCreated = getByText("Login");
        expect(ButtonCreated).not.toBeNull();
    })

    it("Can render a bold Button", () => {
        let { getByText } = render(<Secondary text="Cancel" style={ ButtonStyle.secondary } action={null} />)
        let ButtonCreated = getByText("Cancel");
        expect(ButtonCreated).not.toBeNull();
    })

})
