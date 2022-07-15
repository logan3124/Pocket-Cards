import './EndControls.scss';
import PropTypes from 'prop-types';

export const EndControls = (props) => {
    return (
        <div className="endControls">
            <button className={props.theme} onClick={props.handlePlayAgain}>
                Play Again
            </button>
            <button className={props.theme}>
                Exit
            </button>
        </div>
    )
}

EndControls.propTypes = {
    theme: PropTypes.string.isRequired,
    handlePlayAgain: PropTypes.func.isRequired
}