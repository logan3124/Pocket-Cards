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

    const handleHitClick = () => {
        setPlayerDeck((prev) => [
            dealCard(),
            ...prev
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