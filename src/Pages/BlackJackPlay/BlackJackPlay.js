import './BlackJackPlay.scss';
import { Dealer } from '../../Components/Dealer/Dealer.js';
import { Deck } from '../../Components/Deck/Deck.js';
import { Player } from '../../Components/Player/Player.js';
import { Controls } from '../../Components/Controls/Controls.js';
import { blackJackDeck, dealCard } from './BlackJackLogic.js';
import { useState } from 'react';
import PropTypes from 'prop-types';
 

const initialPlayer = [dealCard(), dealCard()];

const initialDealer = [dealCard(), dealCard()];

export const BlackJackPlay = () => {

    const [playerDeck, setPlayerDeck] = useState(initialPlayer);
    const [dealerDeck, setDealerDeck] = useState(initialDealer);
    const [outcome, setOutcome] = useState('');

    const handleHitClick = () => {
        let total = calculateTotal(playerDeck);
        let card = dealCard();
        setPlayerDeck((prev) => [
            ...prev,
            card
        ])
        total += card.value;
        if (total > 21) {
            setOutcome('LOSER');
        }
    }

    const handleStandClick = () => {
        let dealerTotal = calculateTotal(dealerDeck);
        while (dealerTotal < 17) {
            let card = dealCard()
            setDealerDeck((prev) => [
                ...prev,
                card
            ])
            dealerTotal += card.value;
        }
        let playerTotal = calculateTotal(playerDeck);
        if (dealerTotal > playerTotal) {
            setOutcome('LOSER');
        } else if (dealerTotal < playerTotal) {
            setOutcome('WINNER');
        } else {
            setOutcome('DRAW');
        }
    }

    const calculateTotal = (deck) => {
        let total = 0;
        deck.forEach((card) => {
            total += card.value;
        })
        return total;
    }

    return (
        <div className='play'>
            <div className='section'>
                <Dealer />
                <Deck cards={dealerDeck} total={calculateTotal(dealerDeck)}/>
            </div>
            {outcome ? 
                <p className='outcome'>{outcome}</p> :
                <p className='outcome'></p>
            }
            <div className='section'>
                <Player />
                <Deck cards={playerDeck} total={calculateTotal(playerDeck)}/>
            </div>
            <Controls handleHitClick={handleHitClick} handleStandClick={handleStandClick}/>
        </div>
    )
}

BlackJackPlay.propTypes = {
    toggleBetting: PropTypes.func.isRequired,
    toggleFunds: PropTypes.func.isRequired,
    bet: PropTypes.number.isRequired
}