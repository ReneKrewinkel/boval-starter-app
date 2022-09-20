import React from 'react'

export interface InputInterface {
    value: string
    required: boolean,
    type: "text" | "password" | "url" | "email" | "number"
    style: React.CSSProperties | any,
    regex?: RegExp,
    action(arg?: any): any
}

