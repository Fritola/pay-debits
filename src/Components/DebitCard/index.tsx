import React from 'react';
import {DebitCardContainer, DebitInfoContainer, DebitImage, DebitContainer, DebitValue} from './styles'

interface DebitProps{
    image: string;
    type: string;
    who: string;
    value: string;
    parcel: number;
    rest: string;
    restParcel: string;
    status: boolean;
}

const DebitCard:React.FC<DebitProps> = ({image, type, who, value, status, rest, restParcel, parcel}) => {   
    console.log(parcel) 
    return(
        <DebitCardContainer>
            <DebitInfoContainer>
                <DebitImage src={image}/>

                <DebitContainer>
                    <span>Type: {type} </span>
                    <span>Parcel: {restParcel}/{parcel || 1}</span>
                    <span>Who: {who}</span>
                </DebitContainer>
            </DebitInfoContainer>
            <DebitValue>
                <span>R${value}</span>
                <span>R${rest} to receive</span>
            </DebitValue>
        </DebitCardContainer>
    )
}

export default DebitCard