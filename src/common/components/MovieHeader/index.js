import React from 'react'
import { Backdrop, Title, VoteCount } from './styled'
import star from '../Tiles/star.svg'
import { Wrapper } from './styled'
import { URLimage } from '../../assets/generalData/fetchedData'
import { Icon } from '../Tiles/styled'

export const MovieHeader = ({
    original_title,
    backdrop_path,
    vote_average,
    vote_count,
}) => {
    return (
        <Wrapper>
            <Backdrop img={`${URLimage}${backdrop_path}`} alt="">
                <Title> {original_title}</Title>
                <Title subtitle>
                    {' '}
                    <Icon big src={star} alt="" /> {vote_average}/10
                </Title>
                <VoteCount>{vote_count} votes</VoteCount>
            </Backdrop>
        </Wrapper>
    )
}
