import './BetButtons.scss';
import PropTypes from 'prop-types';

export const BetButtons = (props) => {
    return (
        <div className='bettingRow'>
            <button className={`betting ${props.theme}`} onClick={props.toggleBetting}>
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
    theme: PropTypes.string.isRequired
}