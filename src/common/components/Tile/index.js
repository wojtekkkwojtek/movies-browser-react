import React from "react";
import {
    Wrapper, Poster, Title, Year, TileContainer, TileTags, TagInfo,
    TagInfoDetales, Overview, TileTag, TagRate, TagScore, TagIcon
} from "./styled";
import poster from "./poster.png";
import star from "./star.svg";

export const Tile = () => {
    return (
        <TileContainer>
            <Poster src={poster} alt="" />
            <Wrapper>
                <Title>Mulan</Title>
                <Year>2020</Year>
                <TileTags>
                    <TagInfo>Production:</TagInfo>
                    <TagInfoDetales>China</TagInfoDetales>
                </TileTags>
                <TileTags>
                    <TagInfo>Release date:</TagInfo>
                    <TagInfoDetales>24.10.2020</TagInfoDetales>
                </TileTags>
                <TileTags>
                    <TileTag>Action</TileTag>
                    <TileTag>Adventure</TileTag>
                    <TileTag>Drama</TileTag>
                </TileTags>
                <TileTags>
                    <TagIcon src={star} alt="" />
                    <TagRate>7/8</TagRate>
                    <TagScore>/10</TagScore>
                    <TagScore>335 votes</TagScore>
                </TileTags>
                <Overview>
                    A young Chinese maiden disguises herself as a male warrior in order to save her father.
                    Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises
                    herself as a male warrior in order to save her father.
                </Overview>
            </Wrapper>
        </TileContainer>
    );
}

export default Tile;
