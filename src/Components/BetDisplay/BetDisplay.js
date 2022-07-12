import './BetDisplay.scss';
import PropTypes from 'prop-types';

export const BetDisplay = (props) => {
    return (
        <div className='display'>
            <div>{props.betDisplay}</div>
            <button onClick={props.resetBetDisplay}>
                X
            </button>
        </div>
    )
}


BetDisplay.propTypes = {
    betDisplay: PropTypes.number.isRequired,
    resetBetDisplay: PropTypes.func.isRequired
}