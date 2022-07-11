import './BetChooser.scss';
import PropTypes from 'prop-types';

export const BetChooser = () => {
    return (
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    )
}

BetChooser.propTypes = {
    funds: PropTypes.number.isRequired,
    toggleBet: PropTypes.func.isRequired
}