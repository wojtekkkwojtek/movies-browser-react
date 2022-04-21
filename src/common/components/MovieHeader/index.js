import React from 'react'
import { Backdrop } from './styled'
import rateIcon from '../Tiles/rateIcon.svg'
import { Wrapper } from './styled'
import { Title } from './styled'
import image from './poster-big.jpg'

export const MovieHeader = () => {
    return (
        <Wrapper>
            <Backdrop>
                <div>
                    <Title>tytuł</Title>
                    <Title subtitle>rates</Title>
                </div>
            </Backdrop>
        </Wrapper>
    )
}
