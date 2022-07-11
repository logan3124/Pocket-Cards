import './BlackJackPlay.scss';
import PropTypes from 'prop-types';

export const BlackJackPlay = () => {
    return (
        <div>
            
        </div>
    )
}

BlackJackPlay.propTypes = {
    toggleBetting: PropTypes.func.isRequired,
    toggleFunds: PropTypes.func.isRequired,
    bet: PropTypes.number.isRequired
}