import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Header from '../../Components/Header';
import api from '../../services/api'

import {CreateDebitFormContainer, CreateDebitForm, ButtonContainer, FormButton} from './styles'

interface Idebit {
    value: string;
    debitEmail: string;
    name: string;
    type: string;
    parcel: string;
    who: string;
}

const CreateDebit:React.FC = () => {
    let history = useHistory();
    const [debit, setDebit] = useState<Idebit>({"value": "", "name": "", "type": "", "parcel": "", "who": "", "debitEmail": ""})

    const HandleInput = (e:any) => {                
        const {name, value} = e.target
        setDebit({...debit, [name]: value})     
        console.log(debit)     
    }

    const handleCreate = async () => {
        let userStorage = localStorage.getItem('user') || '{}' 
        let objectUser = JSON.parse(userStorage)
        console.log(debit)
        if(debit.debitEmail === '' || debit.name === '' || debit.value === '' || debit.type === '' || debit.parcel === '' || debit.who === '') {
            alert("Faltam dados")
            return console.error('Error');                        
        }
        else{
            api.post(`/debits/create/${objectUser._id}`, {
                value: debit.value,
                name: debit.name,
                type: debit.type,
                parcel: debit.parcel,
                who: debit.who,
                debitEmail: debit.debitEmail
            })
            history.push("/home");            
        }
                       
    }

    return(
        <>
            <Header />

            <CreateDebitFormContainer>
                <CreateDebitForm>                    
                    <input onChange={(e) => HandleInput(e)} required value={debit.name} name="name" id="" placeholder="Título da dívida"/>
                    <input onChange={(e) => HandleInput(e)} required value={debit.value} name="value" id="" placeholder="Valor"/>
                    <input onChange={(e) => HandleInput(e)} required value={debit.type} name="type" id="" placeholder="Tipo (parcelado ou a vista)"/>
                    <input onChange={(e) => HandleInput(e)} required value={debit.parcel} name="parcel" id="" placeholder="Parcelas"/>
                    <input onChange={(e) => HandleInput(e)} required type="email" value={debit.debitEmail} name="debitEmail" id="" placeholder="Email devedor"/>
                    <input onChange={(e) => HandleInput(e)} required value={debit.who} name="who" id="" placeholder="Quem"/>
                    <ButtonContainer onClick={handleCreate}>
                        <FormButton type="button">Enter</FormButton>
                    </ButtonContainer>
                </CreateDebitForm>
            </CreateDebitFormContainer>
        </>
    )
}

export default CreateDebit