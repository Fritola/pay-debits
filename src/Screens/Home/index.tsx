import React, {useEffect, useState} from 'react';
import Header from '../../Components/Header';
import DebitBar from '../../Components/DebitBar';
import {DebitContainer, DebitCardContainer} from './styles'
import DebitCard from '../../Components/DebitCard';
import profileImage from '../../assets/profile.jpeg'
import api from '../../services/api'

interface debits {
    name: string;
    parcel: number;
    type: string;
    userID: string;
    value: string;
    who: string;
}

const Home:React.FC = () => {
    const [debits, setDebits] = useState<debits[]>([])

    useEffect(() => {        
    //get id from user logged
    api.get('/debits/5f3884ba3ed4e95b91dc280c').then(res => {
        setDebits(res.data)            
    })            
    }, [])

    return(
        <>
        <Header/>

        <DebitContainer>            
            <DebitBar />
        </DebitContainer>

        {debits && debits.map((debit, key) =>
        <DebitCardContainer key={key}>            
            <DebitCard image={profileImage} type={debit.type} who={debit.who} value={debit.value}/>            
        </DebitCardContainer>
        )}

        </>
    )
}

export default Home