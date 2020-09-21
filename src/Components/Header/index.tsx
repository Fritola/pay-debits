import React from 'react';
import { useHistory } from "react-router-dom";
import { HeaderContainer, HeaderUserContainer, ImageUser, HeaderLogout, HeaderCreateDebit } from './styles'
import profileImage from '../../assets/profile.jpeg'


const Header:React.FC = () => {
    let history = useHistory();

    const Logout = () => {
        localStorage.removeItem('user')
        history.push("/login");
    }

    const createDebit = () => {
        history.push("/create");
    }
    //TODO get user info
    return(

        <HeaderContainer>
            <HeaderUserContainer>
                <ImageUser src={profileImage} />
                <h1>Gustavo</h1>
            </HeaderUserContainer>

            <HeaderCreateDebit>
                <span onClick={createDebit}>Create debit</span>
            </HeaderCreateDebit>

            <HeaderLogout>
                <span onClick={Logout}>Sair</span>
            </HeaderLogout>                
        </HeaderContainer>
    )
}

export default Header