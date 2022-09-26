import React from 'react'
import {render} from '@testing-library/react-native'

import Icon, { IconStyle } from '.'


/// Preferably each story instead of actual object
///
import { DefaultIcon } from './Icon.stories'

const testID = "Icon-" + Math.floor(Math.random() * 90000) + 10000

describe("Icon", () => {

    it("Can render Icon", () => {
        let {getByTestId} = render(<DefaultIcon testID={testID}/>)
        let defaultCreated = getByTestId(testID);
        expect(defaultCreated).not.toBeNull();
    })

})