import React from 'react'

export interface ActionButtonInterface {
    style: React.CSSProperties | any,
    label: string,
    action(arg?: any): any
}