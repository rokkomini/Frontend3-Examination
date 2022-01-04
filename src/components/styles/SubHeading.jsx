import React from 'react'
import styled from 'styled-components'

const SubHeadingStyle = styled.h2`
color: #FFB085;
padding: 5px;
`

export default function SubHeading({text}) {
    return (
        <SubHeadingStyle>
            {text}
        </SubHeadingStyle>
    )
}
