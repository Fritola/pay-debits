import React, {useState} from 'react';
import api from '../../services/api'

import {LoginContainer, FormLogin, FormButton, ButtonContainer} from './styles'

const Login:React.FC = () => {
    const [login, setLogin] = useState({email: '', password: ''})

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
        }else{
            console.log("Erro")
        }
        console.log(response.data)
        
    }

    return(
        <LoginContainer>
            <FormLogin>
                <input onChange={(e) => HandleInput(e)} type="email" value={login.email} name="email" id="" placeholder="Email"/>
                <input onChange={(e) => HandleInput(e)} type="password" value={login.password} name="password" id="" placeholder="Password"/>
                <ButtonContainer onClick={HandleLogin}>
                    <FormButton type="button">Enter</FormButton>
                </ButtonContainer>
            </FormLogin>
        </LoginContainer>
    )
}

export default Login