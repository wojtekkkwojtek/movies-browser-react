import React from "react";
import {
    Content, Poster, TileContainer, InfoWrapper,
    InfoDetales
} from "../styled";
import poster from "../poster.png";
import image from "../image.png";

export const LittleTile = () => {
    return (
        <TileContainer little>
            <Poster little src={image} alt="" />
            <Content little>
                <InfoWrapper little>
                    <InfoDetales>Name</InfoDetales>
                    <InfoDetales>Role</InfoDetales>
                </InfoWrapper>
            </Content>
        </TileContainer>
    );
}


