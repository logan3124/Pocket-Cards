import './BlackJackPlay.scss';
import { Dealer } from '../../Components/Dealer/Dealer.js';
import { Deck } from '../../Components/Deck/Deck.js';
import { Player } from '../../Components/Player/Player.js';
import { Controls } from '../../Components/Controls/Controls.js';
import { StartControls } from '../../Components/StartControls/StartControls';
import { dealCard } from './BlackJackLogic.js';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const BlackJackPlay = (props) => {

    const [playerDeck, setPlayerDeck] = useState([]);
    const [dealerDeck, setDealerDeck] = useState([]);
    const [stage, setStage] = useState('start')
    const [outcome, setOutcome] = useState('');

    const handleDealClick = () => {
        setPlayerDeck([
            dealCard(),
            dealCard()
        ])
        setDealerDeck([
            dealCard(),
            dealCard()
        ])
    }

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
            setStage('end');
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
        setStage('end');
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
            {
                stage === "start" ?
                <StartControls handleEditClick={props.toggleBetting} handleDealClick={handleDealClick}/> :
                stage === "middle" ?
                <Controls handleHitClick={handleHitClick} handleStandClick={handleStandClick} /> :
                <div></div>
            }
        </div>
    )
}

BlackJackPlay.propTypes = {
    toggleBetting: PropTypes.func.isRequired,
    toggleFunds: PropTypes.func.isRequired,
    bet: PropTypes.number.isRequired
}