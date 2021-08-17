import React from 'react';

import { 
    Container, 
    Retweeted,
    Body,
    Avatar,
    Content,
    Header,
    Dot,
    Description,
    ImageContent,
    Icons,
    Status,
    CommentIcon,
    RetweetIcon,
    LikeIcon
} from './styles';

import pp2 from '../../styles/assets/pp2.png';

const Tweet = () => {
    return (
        <Container>
            <Retweeted>
                <RetweetIcon />
                Você retweetou
            </Retweeted>

            <Body>
                <Avatar>
                    <img src={pp2} alt="" />
                </Avatar>

                <Content>
                    <Header>
                        <strong>Junior Silva</strong>
                        <span>@junior</span>
                        <Dot />
                        <time>27 de jun</time>
                    </Header>

                    <Description>Olhem que imagem bacana</Description>

                    <ImageContent />

                    <Icons>
                        <Status>
                            <CommentIcon />
                            18
                        </Status>
                        <Status>
                            <RetweetIcon />
                            100
                        </Status>
                        <Status>
                            <LikeIcon />
                            999
                        </Status>
                    </Icons>
                </Content>
            </Body>
        </Container>
    )
}

export default Tweet;
