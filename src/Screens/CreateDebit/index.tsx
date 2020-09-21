import React, {useState} from 'react';
import Header from '../../Components/Header';
import api from '../../services/api'

import {CreateDebitFormContainer, CreateDebitForm, ButtonContainer, FormButton} from './styles'

interface Idebit {
    value: string;
    name: string;
    type: string;
    parcel: string;
    who: string;
}

const CreateDebit:React.FC = () => {
    const [debit, setDebit] = useState<Idebit>({"value": "", "name": "", "type": "", "parcel": "", "who": ""})

    const HandleInput = (e:any) => {                
        const {name, value} = e.target
        setDebit({...debit, [name]: value})     
        console.log(debit)     
    }

    const handleCreate = async () => {
        let userStorage = localStorage.getItem('user') || '{}' 
        let objectUser = JSON.parse(userStorage)
        console.log(objectUser._id)
        
        try {
            api.post(`/debits/create/${objectUser._id}`, {
                value: debit.value,
                name: debit.name,
                type: debit.type,
                parcel: debit.parcel,
                who: debit.who
            })
        } catch (error) {
            console.log(error)
        }                
    }

    return(
        <>
            <Header />

            <CreateDebitFormContainer>
                <CreateDebitForm>                    
                    <input onChange={(e) => HandleInput(e)} value={debit.name} name="name" id="" placeholder="Título da dívida"/>
                    <input onChange={(e) => HandleInput(e)} value={debit.value} name="value" id="" placeholder="Valor"/>
                    <input onChange={(e) => HandleInput(e)} value={debit.type} name="type" id="" placeholder="Tipo (parcelado ou a vista)"/>
                    <input onChange={(e) => HandleInput(e)} value={debit.parcel} name="parcel" id="" placeholder="Parcelas"/>
                    <input onChange={(e) => HandleInput(e)} value={debit.who} name="who" id="" placeholder="Quem"/>
                    <ButtonContainer onClick={handleCreate}>
                        <FormButton type="button">Enter</FormButton>
                    </ButtonContainer>
                </CreateDebitForm>
            </CreateDebitFormContainer>
        </>
    )
}

export default CreateDebit