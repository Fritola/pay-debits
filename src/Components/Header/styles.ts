import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
`
export const HeaderUserContainer = styled.div`
    display: flex;
    align-items: center;    

    h1{
        color: #746F6F;
        font-size: 20px;
        margin-left: 10px;
    }
`

export const ImageUser = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50px;
`

export const HeaderLogout = styled.div`
    span{
        font-weight: bold;
        color: #746F6F;
        font-size: 20px;
    }
`