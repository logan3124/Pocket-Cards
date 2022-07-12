import './BetDisplay.scss';
import PropTypes from 'prop-types';

export const BetDisplay = (props) => {
    return (
        <div className='display'>
            <div>1000</div>
            <button>X</button>
        </div>
    )
}


BetDisplay.propTypes = {
    bet: PropTypes.number.isRequired
}