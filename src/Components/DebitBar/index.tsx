import React, {useState, useEffect} from 'react';
import {DebitBarContainer, DebitReceived, DebitToPay} from './styles'
import api from '../../services/api'

interface IValues {
    Received: number;
    toReceive: number;
    total: number;
}

const DebitBar:React.FC = () => {
    const [value, setValue] = useState<IValues>()
                 
    useEffect(() => {
        let response = localStorage.getItem('user') || '{}' 
        let objectUser = JSON.parse(response)
        api.get('/debits/total/5f4e6382f2c11f13300844d6').then(({data}) => {
            setValue(data)
        })
    }, [])

    return(
        <DebitBarContainer>
            <DebitReceived>
                <span>R${value?.Received} received</span>
            </DebitReceived>
            <DebitToPay>
                <span>R$R${value?.toReceive} to receive</span>
            </DebitToPay>
        </DebitBarContainer>
    )
}

export default DebitBar