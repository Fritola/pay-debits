import React, {useState} from 'react';

import ReactDOM from 'react-dom';

import {GoogleLogin, GoogleLogout} from 'react-google-login';


import api from '../../services/api'
import { useHistory } from "react-router-dom";

import {LoginContainer, FormLogin, FormButton, ButtonContainer} from './styles'

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
    const [login, setLogin] = useState({email: '', password: ''})
    let history = useHistory();

    const HandleInput = (e:any) => {                
        const {name, value} = e.target
        setLogin({...login, [name]: value})          
    }

    const HandleLogin = async () => {
        
        const response = await api.post('/login', {
            email: login.email,
            password: login.password
        })
        if(response){
            localStorage.setItem('user', JSON.stringify(response.data.user))
            history.push("/home");
        }else{
            console.log("Erro")
        }
        console.log(response.data)        
    }

    const responseGoogle = async (response: any) => {
        console.log(response.profileObj)               
        
        try {
            const res = await api.post('/user/googleUser', {
                name: response.profileObj.name,
                email: response.profileObj.email,            
                googleId: response.profileObj.googleId,
                imageUrl: response.profileObj.imageUrl
            })
            console.log(res)
            //TODO inserir ID do Mongo
            localStorage.setItem('user', JSON.stringify(response.profileObj))
            history.push("/home");
        }catch (error) {
            console.log(error)
            return false
        }                
      }
    return(
        <>
        <LoginContainer>
            <FormLogin>
                <input onChange={(e) => HandleInput(e)} type="email" value={login.email} name="email" id="" placeholder="Email"/>
                <input onChange={(e) => HandleInput(e)} type="password" value={login.password} name="password" id="" placeholder="Password"/>
                <ButtonContainer onClick={HandleLogin}>
                    <FormButton type="button">Enter</FormButton>
                </ButtonContainer>
            </FormLogin>
            
        </LoginContainer>
        
        <GoogleLogin
            clientId="202500888561-oftsn2ng5t6qi66se6gbuqd1tgm4klar.apps.googleusercontent.com"
            render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            )}
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />

        <GoogleLogout
            clientId="202500888561-oftsn2ng5t6qi66se6gbuqd1tgm4klar.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={() => console.log("logout")}
            />
        </>
    )
}

export default Login