import './BlackJackPlay.scss';
import { Dealer } from '../../Components/Dealer/Dealer.js';
import { Deck } from '../../Components/Deck/Deck.js';
import { Player } from '../../Components/Player/Player.js';
import { Controls } from '../../Components/Controls/Controls.js';
import PropTypes from 'prop-types';

export const BlackJackPlay = () => {
    return (
        <div className='play'>
            <div className='section'>
                <Dealer />
                <Deck />
            </div>
            <div className='section'>
                <Player />
                <Deck />
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