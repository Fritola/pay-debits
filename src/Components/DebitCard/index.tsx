import React from 'react';
import {DebitCardContainer, DebitInfoContainer, DebitImage, DebitContainer, DebitValue} from './styles'
import profileImage from '../../assets/profile.jpeg'

interface DebitProps{
    image: string;
    type: string;
    who: string;
    value: string;
}

const DebitCard:React.FC<DebitProps> = ({image, type, who, value}) => {    
    return(
        <DebitCardContainer>
            <DebitInfoContainer>
                <DebitImage src={image}/>

                <DebitContainer>
                    <span>Type: {type} </span>
                    <span>Who: {who}</span>
                </DebitContainer>
            </DebitInfoContainer>
            <DebitValue>
                <span>R${value}</span>
            </DebitValue>
        </DebitCardContainer>
    )
}

export default DebitCard