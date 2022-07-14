import './EndControls.scss';
import PropTypes from 'prop-types';

export const EndControls = (props) => {
    return (
        <div className="endControls">
            <button onClick={props.handlePlayAgain}>
                Play Again
            </button>
            <button>
                Exit
            </button>
        </div>
    )
}

EndControls.propTypes = {
    handlePlayAgain: PropTypes.func.isRequired
}