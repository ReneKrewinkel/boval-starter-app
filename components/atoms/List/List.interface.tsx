import React from 'react'

export interface ListInterface {
    testID?: string,
    props?: any,  /// refactor to appropriate (destructured) props
    style?: React.CSSProperties | any,
}