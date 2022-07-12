import './BetButtons.scss';
import PropTypes from 'prop-types';

export const BetButtons = (props) => {
    const handleDoneClick = () => {
        props.toggleBet(props.betDisplay);
        props.toggleBetting();
    }

    return (
        <div className='bettingRow'>
            <button className={`betting ${props.theme}`} onClick={handleDoneClick}>
                Done
            </button>
            <button className={`betting ${props.theme}`}>
                Cancel
            </button>
        </div>
    )
}

BetButtons.propTypes = {
    toggleBetting: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired,
    betDisplay: PropTypes.number.isRequired,
    toggleBet: PropTypes.func.isRequired
}