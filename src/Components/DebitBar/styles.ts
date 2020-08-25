import styled from 'styled-components'

export const DebitBarContainer = styled.div`
    width: 800px;
    height: 90px;    
    border-radius: 10px;    
    display: flex;
    justify-content: center;
`

export const DebitReceived = styled.div`
    width: 600px;
    height: 90px;
    justify-content: center;
    align-items: center;
    display: flex;
    background: #AAE1AF;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    span{
        color: #204E24
    }
`

export const DebitToPay = styled.div`
    width: 200px;
    height: 90px;
    justify-content: center;
    align-items: center;
    display: flex;
    background: #EA5E5E;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    span{
        color: #651313
    }
`