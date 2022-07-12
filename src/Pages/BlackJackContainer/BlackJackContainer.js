import './BlackJackContainer.scss';
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

    const [theme, setTheme] = useState('red');

    const nextTheme = () => {
        setTheme((prev) => {
            if (prev === 'red') {
                return 'blue';
            } else if (prev === 'blue') {
                return 'green';
            } else {
                return 'red';
            }
        })
    }

    return (
        <div className={`blackJack ${theme}`}>
            <header className='top'>
                <div className={`menu ${theme}`}>Menu</div>
                <div className={`bet ${theme}`}>{bet}</div>
                <h1 className={theme}>Pocket Cards</h1>
                <div className={`funds ${theme}`}>{funds}</div>
                <div className={`theme ${theme}`} onClick={nextTheme}>Theme</div>
            </header>
            <main>
            {
            betting? 
            <BlackJackBet
                theme={theme}
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
            </main>
        </div>
    )
}