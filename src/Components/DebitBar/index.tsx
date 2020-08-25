import React from 'react';
import {DebitBarContainer, DebitReceived, DebitToPay} from './styles'

const DebitBar:React.FC = () => {
    return(
        <DebitBarContainer>
            <DebitReceived>
                <span>R$5000,00 received</span>
            </DebitReceived>
            <DebitToPay>
                <span>R$1000,00 to receive</span>
            </DebitToPay>
        </DebitBarContainer>
    )
}

export default DebitBar