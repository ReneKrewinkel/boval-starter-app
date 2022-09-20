import React from 'react'

export interface ButtonInterface {
    text: string
    style: React.CSSProperties | any,
    action(arg?: any): any
}

