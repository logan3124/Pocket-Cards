import './BlackJackPlay.scss';
import { Dealer } from '../../Components/Dealer/Dealer.js';
import { Deck } from '../../Components/Deck/Deck.js';
import { Player } from '../../Components/Player/Player.js';
import { Controls } from '../../Components/Controls/Controls.js';
import { blackJackDeck, shuffleDeck, dealCard } from './BlackJackLogic.js';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const BlackJackPlay = () => {
    const [playerDeck, setPlayerDeck] = useState([]);
    const [dealerDeck, setDealerDeck] = useState([]);

    const deck = blackJackDeck.slice();
    shuffleDeck(deck);

    const dealPlayer = () => {
        setPlayerDeck((prev) => [
            ...prev,
            dealCard(deck)
        ]);
    }

    const dealDealer = () => {
        setDealerDeck((prev) => [
            ...prev,
            dealCard(deck)
        ]);
    }

    

    return (
        <div className='play'>
            <div className='section'>
                <Dealer />
                <Deck cards={dealerDeck}/>
            </div>
            <div className='section'>
                <Player />
                <Deck cards={playerDeck}/>
            </div>
            <Controls />
        </div>
    )
}

BlackJackPlay.propTypes = {
    toggleBetting: PropTypes.func.isRequired,
    toggleFunds: PropTypes.func.isRequired,
    bet: PropTypes.number.isRequired
}