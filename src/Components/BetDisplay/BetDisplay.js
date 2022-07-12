import './BetDisplay.scss';
import PropTypes from 'prop-types';

export const BetDisplay = (props) => {
    return (
        <div className='display'>
            <div className={props.theme}>{props.betDisplay}</div>
            <button className={props.theme} onClick={props.resetBetDisplay}>
                X
            </button>
        </div>
    )
}


BetDisplay.propTypes = {
    betDisplay: PropTypes.number.isRequired,
    resetBetDisplay: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
}