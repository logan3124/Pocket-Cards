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

    const addFunds = (amount) => {
        setFunds((prev) => prev + amount)
    }

    const removeFunds = (amount) => {
        setFunds((prev) => prev - amount)
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
                theme={theme}
                toggleBetting={toggleBetting}
                addFunds={addFunds}
                removeFunds={removeFunds}
                bet={bet}
            />
            }
            </main>
        </div>
    )
}