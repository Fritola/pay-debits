import React from 'react';
import Header from '../../Components/Header';
import DebitBar from '../../Components/DebitBar';
import {DebitContainer, DebitCardContainer} from './styles'
import DebitCard from '../../Components/DebitCard';
import profileImage from '../../assets/profile.jpeg'

const Home:React.FC = () => {
    return(
        <>
        <Header/>

        <DebitContainer>            
            <DebitBar />
        </DebitContainer>

        <DebitCardContainer>
            <DebitCard image={profileImage} type="A vista" who="Mateus Paixao" value="500"/>
        </DebitCardContainer>

        </>
    )
}

export default Home