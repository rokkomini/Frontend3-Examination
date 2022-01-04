import React from 'react'
import { TitleBar } from './styles/GlobalUtilities'

export default function GlobalPageBar({ text }) {
    return (
        <div>
            <TitleBar>
                <h1>DeskClient</h1>
                <h1>{text}</h1>
            </TitleBar>
        </div>
    )
}
