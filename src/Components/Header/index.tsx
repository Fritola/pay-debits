import React from 'react';
import { HeaderContainer, HeaderUserContainer, ImageUser, HeaderLogout } from './styles'
import profileImage from '../../assets/profile.jpeg'


const Header:React.FC = () => {

    //TODO get user info
    return(

        <HeaderContainer>
            <HeaderUserContainer>
                <ImageUser src={profileImage} />
                <h1>Gustavo</h1>
            </HeaderUserContainer>
            <HeaderLogout>
                <span>Sair</span>
            </HeaderLogout>
        </HeaderContainer>
    )
}

export default Header