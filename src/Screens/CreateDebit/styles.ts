import styled from 'styled-components'

export const CreateDebitFormContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const CreateDebitForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

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
export const FormButton = styled.button`
    width: 150px;
    font-size: 20px;
    font-weight: bold;
    padding: 15px;
    border-radius: 10px;    
    border: solid 1px;
    background: #AAE1AF;
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`