import React from 'react';

import {LoginContainer, FormLogin, FormButton, ButtonContainer} from './styles'

const Login:React.FC = () => {
    return(
        <LoginContainer>
            <FormLogin>
                <input type="email" name="email" id="" placeholder="Email"/>
                <input type="password" name="password" id="" placeholder="Password"/>
                <ButtonContainer>
                    <FormButton type="button">Enter</FormButton>
                </ButtonContainer>
            </FormLogin>
        </LoginContainer>
    )
}

export default Login