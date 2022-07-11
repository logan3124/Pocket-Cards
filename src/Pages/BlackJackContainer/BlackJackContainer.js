import './BlackJackContainer.scss';
import { DropDown } from '../../Components/DropDown/DropDown.js';
import { BlackJackBet } from '../BlackJackBet/BlackJackBet.js';
import { BlackJackPlay } from '../BlackJackPlay/BlackJackPlay.js';
import { useState } from 'react';

export const BlackJackContainer = () => {
    const [betting, setBetting] = useState(true);

    const toggleBetting = () => {
        setBetting((prev) => !prev);
    }

    const [bet, setBet] = useState(0);

    const toggleBet = (newBet) => {
        setBet(newBet);
    }

    const [funds, setFunds] = useState(500);

    const toggleFunds = (newFunds) => {
        setFunds(newFunds)
    }

    return (
        <div>
            <DropDown />
            <div>{bet}</div>
            <h1>Pocket Cards</h1>
            <div>{funds}</div>
            <button>Theme</button>
            {
            betting? 
            <BlackJackBet 
                toggleBetting={toggleBetting}
                toggleBet={toggleBet}
                funds={funds}
                bet={bet}
            /> : 
            <BlackJackPlay
                toggleBetting={toggleBetting}
                toggleFunds={toggleFunds}
                bet={bet}
            />
            }
        </div>
    )
}