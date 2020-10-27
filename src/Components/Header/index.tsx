import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { HeaderContainer, HeaderUserContainer, ImageUser, HeaderLogout, HeaderCreateDebit } from './styles'
import profileImage from '../../assets/profile.jpeg'

interface IUser{
    _id: string;
    name: string;
    email: string;
    imageUrl: string;
    googleId: string
}

const Header:React.FC = () => {
    const [user, setUser] = useState<IUser>()
    let history = useHistory();

    useEffect(() => {
        const userStorage:any = localStorage.getItem('user')
        const userParsed = JSON.parse(userStorage)                        
        setUser(userParsed)
    }, [])

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
                <ImageUser src={user?.imageUrl} />
                <h1>{user?.name}</h1>
            </HeaderUserContainer>

            <HeaderCreateDebit>
                <span onClick={createDebit}>Criar dívida</span>
            </HeaderCreateDebit>

            <HeaderLogout>
                <span onClick={Logout}>Logout</span>
            </HeaderLogout>                
        </HeaderContainer>
    )
}

export default Header