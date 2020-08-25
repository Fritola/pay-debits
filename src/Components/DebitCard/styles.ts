import styled from 'styled-components'

export const DebitCardContainer = styled.div`
    background: #D6EFEE;
    width: 700px;
    height: 150px;
    border-radius: 10px;
    display: flex;
    align-items: center;    
`

export const DebitInfoContainer = styled.div`
    display: flex;
    align-items: center;  
    width: 50%;
    justify-content: space-around;
    
`

export const DebitImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const DebitContainer = styled.div`
    display: flex;
    flex-direction: column;

    span{
        color: #8E8B8B;
        margin-bottom: 10px;
        font-size: 18px;
    }
`

export const DebitValue = styled.div`
    width: 50%;
    justify-content: center;
    display: flex;

    span{
        color: #478E4E;
        font-size: 40px;
    }
`