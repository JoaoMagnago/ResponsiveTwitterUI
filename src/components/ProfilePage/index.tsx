import React from 'react';

import Feed from '../Feed';
import pp1 from '../../styles/assets/pp1.jpg';

import { 
    Container, 
    Banner,
    Avatar,
    ProfileData,
    LocationIcon,
    CakeIcon,
    Followage,
    EditButton
} from './styles';

const ProfilePage = () => {
    return (
        <Container>
            <Banner>
                <Avatar>
                    <img src={pp1} alt="" />
                </Avatar>
            </Banner>

            <ProfileData>
                <EditButton outlined>Editar perfil</EditButton>

                <h1>João Magnago</h1>
                <h2>@joao</h2>

                <p>Full Stack Developer</p>

                <ul>
                    <li>
                        <LocationIcon />
                        Espírito Santo, Brasil
                    </li>
                    <li>
                        <CakeIcon />
                        Nascido(a) em 08 de setembro de 1998
                    </li>
                </ul>

                <Followage>
                    <span>
                        seguindo <strong>94</strong>
                    </span>
                    <span>
                        <strong>672</strong> seguidores
                    </span>
                </Followage>
            </ProfileData>

            <Feed />
        </Container>
    )
}

export default ProfilePage;
