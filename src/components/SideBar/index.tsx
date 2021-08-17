import React from 'react';
import StickyBox from 'react-sticky-box';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

import pp2 from '../../styles/assets/pp2.png';
import pp3 from '../../styles/assets/pp3.jpg';
import pp4 from '../../styles/assets/pp4.jpg';

import {
    Container,
    SearchWrapper,
    SearchInput,
    SearchIcon,
    Body,
} from './styles';

const SideBar = () => {
    return (
        <Container>
            <SearchWrapper>
                <SearchInput placeholder="Buscar no Twitter" />
                <SearchIcon />
            </SearchWrapper>

            <StickyBox>
                <Body>
                    <List 
                        title="Talvez você curta"
                        elements={[
                            <FollowSuggestion 
                                name="Junior Silva"
                                nickname="@junior"
                                pp={pp2}
                            />,
                            <FollowSuggestion 
                                name="Julia Pereira"
                                nickname="@julia"
                                pp={pp3}
                            />,
                            <FollowSuggestion 
                                name="Joana Costa"
                                nickname="@joana"
                                pp={pp4}
                            />,
                        ]}
                    />
                    <List 
                        title="O que está acontecendo"
                        elements={[
                            <News 
                                title="Assunto do momento no Brasil"
                                topic="Eleições"
                            />,
                            <News 
                                title="Assunto do momento em São Paulo"
                                topic="Vagas de emprego"
                            />,
                            <News 
                                title="Assunto do momento no Mundo"
                                topic="Tokyo 2020"
                            />,
                        ]}
                    />
                    <List 
                        title="O que está acontecendo"
                        elements={[
                            <News 
                                title="Assunto do momento no Brasil"
                                topic="Eleições"
                            />,
                            <News 
                                title="Assunto do momento em São Paulo"
                                topic="Vagas de emprego"
                            />,
                            <News 
                                title="Assunto do momento no Mundo"
                                topic="Tokyo 2020"
                            />,
                        ]}
                    />
                    <List 
                        title="O que está acontecendo"
                        elements={[
                            <News 
                                title="Assunto do momento no Brasil"
                                topic="Eleições"
                            />,
                            <News 
                                title="Assunto do momento em São Paulo"
                                topic="Vagas de emprego"
                            />,
                            <News 
                                title="Assunto do momento no Mundo"
                                topic="Tokyo 2020"
                            />,
                        ]}
                    />
                </Body>
            </StickyBox>
        </Container>
    )
}

export default SideBar;
