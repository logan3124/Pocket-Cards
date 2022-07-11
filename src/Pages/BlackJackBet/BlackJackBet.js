import './BlackJackBet.scss';
import PropTypes from 'prop-types';

export const BlackJackBet = () => {
    return (
        <div>

        </div>
    )
}

BlackJackBet.propTypes = {
    toggleBetting: PropTypes.func.isRequired,
    toggleBet: PropTypes.func.isRequired,
    funds: PropTypes.number.isRequired
}

