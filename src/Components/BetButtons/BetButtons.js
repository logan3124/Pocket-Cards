import './BetButtons.scss';
import PropTypes from 'prop-types';

export const BetButtons = (props) => {
    return (
        <div>
            <button onClick={props.toggleBetting}>
                Done
            </button>
            <button>
                Cancel
            </button>
        </div>
    )
}

BetButtons.propTypes = {
    toggleBetting: PropTypes.func.isRequired
}