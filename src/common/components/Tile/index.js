import React from 'react'
import {
    Content,
    Poster,
    Title,
    Year,
    TileContainer,
    InfoWrapper,
    InfoDetails,
    Overview,
    Genres,
    Rate,
    Score,
    Icon,
    Info,
} from './styled'
import poster from './poster.png'
import star from './star.svg'

export const Tile = () => {
    return (
        <TileContainer>
            <Poster src={poster} alt="" />
            <Content>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <InfoWrapper>
                    <Info>Production:</Info>
                    <InfoDetails>China</InfoDetails>
                </InfoWrapper>
                <InfoWrapper>
                    <Info>Release date:</Info>
                    <InfoDetails>24.10.2020</InfoDetails>
                </InfoWrapper>
                <InfoWrapper>
                    <Genres>Action</Genres>
                    <Genres>Adventure</Genres>
                    <Genres>Drama</Genres>
                </InfoWrapper>
                <InfoWrapper>
                    <Icon src={star} alt="" />
                    <Rate>7/8</Rate>
                    <Score>/10</Score>
                    <Score>335 votes</Score>
                </InfoWrapper>
                <Overview>
                    A young Chinese maiden disguises herself as a male warrior
                    in order to save her father. Disguises herself as a male
                    warrior in order to save her father.
                </Overview>
            </Content>
        </TileContainer>
    )
}

export default Tile
