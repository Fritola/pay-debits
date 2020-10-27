import React, {useState, useEffect} from 'react';
import {DebitCardContainer, DebitInfoContainer, DebitImage, DebitContainer, DebitValue} from './styles'

interface DebitProps{
    name: string;
    image: string;
    type: string;
    who: string;
    value: string;
    parcel: number;
    rest: string;
    restParcel: string;
    status: boolean;
}

interface IUser{
    _id: string;
    name: string;
    email: string;
    imageUrl: string;
    googleId: string
}

const DebitCard:React.FC<DebitProps> = ({name, type, who, value, status, rest, restParcel, parcel}) => {   
    const [user, setUser] = useState<IUser>()

    useEffect(() => {
        const userStorage:any = localStorage.getItem('user')
        const userParsed = JSON.parse(userStorage)                        
        setUser(userParsed)
    }, [])

    return(
        <DebitCardContainer>
            <DebitInfoContainer>
                <DebitImage src={user?.imageUrl}/>

                <DebitContainer>
                    <span>Nome: {name} </span>
                    <span>Parcelas: {restParcel} de {parcel || 1}</span>
                    <span>Quem: {who}</span>
                </DebitContainer>
            </DebitInfoContainer>
            <DebitValue>
                <span>R${value}</span>
                {/* <span>R${rest} para receber</span> */}
            </DebitValue>
        </DebitCardContainer>
    )
}

export default DebitCard