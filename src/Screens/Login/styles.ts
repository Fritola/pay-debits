import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    input{
        margin-top: 20px;
        width: 450px;
        height: 60px;
        border: solid 1px;
        padding: 10px;
        border-radius: 10px;
        background: #D6EFEE;
        font-size: 24px;
        font-weight: bold;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`

export const FormButton = styled.button`
    width: 150px;
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;    
    border: solid 1px;
    background: #AAE1AF;
`