import './BetButtons.scss';
import PropTypes from 'prop-types';

export const BetButtons = (props) => {
    return (
        <div className='bettingRow'>
            <button className='betting' onClick={props.toggleBetting}>
                Done
            </button>
            <button className='betting'>
                Cancel
            </button>
        </div>
    )
}

BetButtons.propTypes = {
    toggleBetting: PropTypes.func.isRequired
}