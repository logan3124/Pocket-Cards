import './BlackJackBet.scss';
import { BetDisplay } from '../../Components/BetDisplay/BetDisplay';
import { BetChooser } from '../../Components/BetChooser/BetChooser';
import { BetButtons } from '../../Components/BetButtons/BetButtons';
import PropTypes from 'prop-types';

export const BlackJackBet = (props) => {
    return (
        <div>
            <BetDisplay
                bet={props.bet} 
            />
            <BetChooser
                funds={props.funds}
                toggleBet={props.toggleBet} 
            />
            <br></br>
            <BetButtons
                toggleBet={props.toggleBet} 
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

