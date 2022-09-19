import React from 'react'
import { render } from '@testing-library/react-native'

import { Default, Bold} from "./Label.stories";
import LabelStyle from "./Label.style"


describe("Label", () => {

    it("Can render a default label", () => {
        let { getByText } = render(<Default text="default" style={ LabelStyle.default } />)
        let labelCreated = getByText("default");
        expect(labelCreated).not.toBeNull();
    })

    it("Can render a bold label", () => {
        let { getByText } = render(<Default text="default" style={ LabelStyle.default } />)
        let labelCreated = getByText("default");
        expect(labelCreated).not.toBeNull();
    })

})
