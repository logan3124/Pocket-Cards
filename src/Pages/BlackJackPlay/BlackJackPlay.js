import './BlackJackPlay.scss';
import { Dealer } from '../../Components/Dealer/Dealer.js';
import { Deck } from '../../Components/Deck/Deck.js';
import { Player } from '../../Components/Player/Player.js';
import { Controls } from '../../Components/Controls/Controls.js';
import { blackJackDeck, shuffleDeck, dealCard } from './BlackJackLogic.js';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';


export const BlackJackPlay = () => {
    const [deck, setDeck] = useState(shuffleDeck(blackJackDeck.slice()))

    const DealCard = () => {
        console.log(deck.slice(0, 1))
        setDeck((prev) => prev.slice(1))
    }

    const [playerDeck, setPlayerDeck] = useState([dealCard(deck), dealCard(deck)]);
    const [dealerDeck, setDealerDeck] = useState([dealCard(deck), dealCard(deck)]);

    const handleHitClick = () => {
        setPlayerDeck((prev) => [
            ...prev,
            dealCard(deck)
        ])
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
            <Controls handleHitClick={handleHitClick}/>
        </div>
    )
}

BlackJackPlay.propTypes = {
    toggleBetting: PropTypes.func.isRequired,
    toggleFunds: PropTypes.func.isRequired,
    bet: PropTypes.number.isRequired
}