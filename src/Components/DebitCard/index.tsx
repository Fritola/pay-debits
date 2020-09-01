import React from 'react';
import {DebitCardContainer, DebitInfoContainer, DebitImage, DebitContainer, DebitValue} from './styles'

interface DebitProps{
    image: string;
    type: string;
    who: string;
    value: string;
    status: boolean;
}

const DebitCard:React.FC<DebitProps> = ({image, type, who, value, status}) => {   
    console.log(status) 
    return(
        <DebitCardContainer>
            <DebitInfoContainer>
                <DebitImage src={image}/>

                <DebitContainer>
                    <span>Type: {type} </span>
                    <span>Who: {who}</span>
                    <span>Status: {status}</span>
                </DebitContainer>
            </DebitInfoContainer>
            <DebitValue>
                <span>R${value}</span>
            </DebitValue>
        </DebitCardContainer>
    )
}

export default DebitCard