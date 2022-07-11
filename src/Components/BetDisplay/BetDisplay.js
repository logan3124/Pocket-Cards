import './BetDisplay.scss';
import PropTypes from 'prop-types';

export const BetDisplay = (props) => {
    return (
        <div>
            <div>{props.bet}</div>
            <button>X</button>
        </div>
    )
}


BetDisplay.propTypes = {
    bet: PropTypes.number.isRequired
}