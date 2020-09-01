import React, {useEffect, useState, useCallback} from 'react';
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
    status: boolean;
}

interface IUser {
    _id: string;
    email: string;
    name: string;
    password: string;
}

const Home:React.FC = () => {
    const [debits, setDebits] = useState<debits[]>([])
    const [user, setUser] = useState<IUser>()
    
    useEffect(() => {        
    
    const getUser = async () => {
        let response = await localStorage.getItem('user') || '{}' 
        let objectUser = JSON.parse(response)
        setUser(objectUser)             
    }
    getUser()             
    }, [])

    useEffect(() => {
        if(user !== undefined)
        api.get(`/debits/${user?._id}`).then(res => {
            setDebits(res.data)            
        })
    }, [user])

    return(
        <>
        <Header/>

        <DebitContainer>            
            <DebitBar />
        </DebitContainer>

        {debits && debits?.map((debit, key) =>
        <DebitCardContainer key={key}>            
            <DebitCard image={profileImage} status={debit.status} type={debit.type} who={debit.who} value={debit.value}/>            
        </DebitCardContainer>
        )}

        </>
    )
}

export default Home