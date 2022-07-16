import './BlackJackPlay.scss';
import { Dealer } from '../../Components/Dealer/Dealer.js';
import { Deck } from '../../Components/Deck/Deck.js';
import { Player } from '../../Components/Player/Player.js';
import { Controls } from '../../Components/Controls/Controls.js';
import { StartControls } from '../../Components/StartControls/StartControls';
import { EndControls } from '../../Components/EndControls/EndControls';
import { blackJackDeck, dealCard, resetDeck, shuffleDeck } from './BlackJackLogic.js';
import { useState, useEffect } from 'react';
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
        setStage('middle');
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
            props.removeFunds(props.bet)
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
        if (dealerTotal < playerTotal || dealerTotal > 21) {
            setOutcome('WINNER');
            props.addFunds(props.bet)
        } else if (dealerTotal > playerTotal) {
            setOutcome('LOSER');
            props.removeFunds(props.bet)
        } else {
            setOutcome('DRAW');
        }
        resetDeck();
        shuffleDeck();
        shuffleDeck();
        shuffleDeck();
        shuffleDeck();
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
                <Dealer theme={props.theme}/>
                <Deck theme={props.theme} cards={dealerDeck} stage={stage} total={calculateTotal(dealerDeck)}/>
            </div>
            {outcome ? 
                <p className='outcome'>{outcome}</p> :
                <p className='outcome'></p>
            }
            <div className='section'>
                <Player theme={props.theme}/>
                <Deck theme={props.theme} cards={playerDeck} total={calculateTotal(playerDeck)}/>
            </div>
            {
                stage === "start" ?
                <StartControls theme={props.theme} handleEditClick={props.toggleBetting} handleDealClick={handleDealClick}/> :
                stage === "middle" ?
                <Controls theme={props.theme} handleHitClick={handleHitClick} handleStandClick={handleStandClick} /> :
                <EndControls theme={props.theme} handlePlayAgain={props.toggleBetting}/>
            }
        </div>
    )
}

BlackJackPlay.propTypes = {
    theme: PropTypes.string.isRequired,
    toggleBetting: PropTypes.func.isRequired,
    addFunds: PropTypes.func.isRequired,
    removeFunds: PropTypes.func.isRequired,
    bet: PropTypes.number.isRequired
}