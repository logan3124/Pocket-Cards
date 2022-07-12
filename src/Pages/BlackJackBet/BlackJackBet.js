import './BlackJackBet.scss';
import { BetDisplay } from '../../Components/BetDisplay/BetDisplay';
import { BetChooser } from '../../Components/BetChooser/BetChooser';
import { BetButtons } from '../../Components/BetButtons/BetButtons';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const BlackJackBet = (props) => {
    const [betDisplay, setBetDisplay] = useState(0);

    const addBetDisplay = (number) =>  {
        setBetDisplay((prev) => prev + number);
    }

    const resetBetDisplay = () => {
        setBetDisplay(0);
    }

    return (
        <div className='blackJackBet'>
            <BetDisplay
                betDisplay={betDisplay}
                resetBetDisplay={resetBetDisplay} 
            />
            <BetChooser
                funds={props.funds}
                addBetDisplay={addBetDisplay} 
            />
            <br></br>
            <BetButtons
                toggleBetting={props.toggleBetting} 
            />
        </div>
    )
}

BlackJackBet.propTypes = {
    toggleBetting: PropTypes.func.isRequired,
    toggleBet: PropTypes.func.isRequired,
    funds: PropTypes.number.isRequired,
    bet: PropTypes.number.isRequired
}

