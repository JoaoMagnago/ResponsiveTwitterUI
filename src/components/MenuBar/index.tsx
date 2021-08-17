import React from 'react';
import Button from '../Button';

import { 
    Container, 
    Topside, 
    Logo,
    MenuButton, 
    HomeIcon, 
    BellIcon, 
    EmailIcon, 
    FavoriteIcon, 
    ProfileIcon,
    Botside,
    Avatar,
    ProfileData,
    ExitIcon,
} from './styles';

import pp1 from '../../styles/assets/pp1.jpg';

const MenuBar = () => {
    return (
        <Container>
            <Topside>
                <Logo />

                <MenuButton>
                    <HomeIcon />
                    <span>Página Inicial</span>
                </MenuButton>

                <MenuButton>
                    <BellIcon />
                    <span>Notificações</span>
                </MenuButton>

                <MenuButton>
                    <EmailIcon />
                    <span>Mensagens</span>
                </MenuButton>

                <MenuButton>
                    <FavoriteIcon />
                    <span>Favoritados</span>
                </MenuButton>

                <MenuButton className="active">
                    <ProfileIcon />
                    <span>Perfil</span>
                </MenuButton>

                <Button>
                    <span>Tweetar</span>
                </Button>
            </Topside>

            <Botside>
                <Avatar>
                    <img src={pp1} alt="" />
                </Avatar>

                <ProfileData>
                    <strong>João Magnago</strong>
                    <span>@joao</span>
                </ProfileData>

                <ExitIcon />
            </Botside>
        </Container>
    )
}

export default MenuBar
