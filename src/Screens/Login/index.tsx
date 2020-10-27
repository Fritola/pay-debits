import React from 'react';

import {GoogleLogin} from 'react-google-login';

import transferImage from '../../assets/transfer-money.png'

import api from '../../services/api'
import { useHistory } from "react-router-dom";

import {MainContainer, ImageContainer, LoginContainer} from './styles'

interface GoogleLoginResponse {
    profileObj: IGoogleUser;
}

interface IGoogleUser {
    name: string;
    email: string;
    imageUrl: string;
    googleId: string;
}

const Login:React.FC = () => {    
    let history = useHistory();

    const responseGoogle = async (response: any) => {
        console.log(response.profileObj)               
        
        try {
            const res = await api.post('/user/googleUser', {
                name: response.profileObj.name,
                email: response.profileObj.email,            
                googleId: response.profileObj.googleId,
                imageUrl: response.profileObj.imageUrl
            })
            console.log(res.data)
            localStorage.setItem('user', JSON.stringify(res.data))
            history.push("/home");
        }catch (error) {
            console.log(error)
            return false
        }                
      }
    return(
        <MainContainer>

        <ImageContainer>
            <img src={transferImage} alt=""/>
        </ImageContainer>
        
        <LoginContainer>
            {/* <FormLogin>
                <input onChange={(e) => HandleInput(e)} type="email" value={login.email} name="email" id="" placeholder="Email"/>
                <input onChange={(e) => HandleInput(e)} type="password" value={login.password} name="password" id="" placeholder="Password"/>
                <ButtonContainer onClick={HandleLogin}>
                    <FormButton type="button">Enter</FormButton>
                </ButtonContainer>
            </FormLogin> */}            
            
        <div className="googleLoginContainer">
            <span>Sign in or Register</span>
            <GoogleLogin
            className="testeGoogle"
            buttonText="Enter with Google"
                clientId="202500888561-oftsn2ng5t6qi66se6gbuqd1tgm4klar.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
        </LoginContainer>

        {/* <GoogleLogout
            clientId="202500888561-oftsn2ng5t6qi66se6gbuqd1tgm4klar.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={() => console.log("logout")}
            /> */}
        </MainContainer>
    )
}

export default Login