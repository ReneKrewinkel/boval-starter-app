import React from 'react'
import { render } from '@testing-library/react-native'

import List, { ListStyle } from '.'
///import ListStyle from './List.style'

/// Preferably each story instead of actual object
///
import { DefaultList } from './List.stories'

const testID = "List-" + Math.floor(Math.random()*90000) + 10000

describe("List", () => {

    it("Can render List", () => {
        // @ts-ignore
        let { getByTestId } = render(<DefaultList testID={ testID }/>)
        let defaultCreated = getByTestId(testID);
        expect(defaultCreated).not.toBeNull();
    })
    
})