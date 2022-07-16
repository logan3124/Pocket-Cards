import './SolitaireButtons.scss';
import PropTypes from 'prop-types';

export const SolitaireButtons = (props) => {

    return (
        <div className='solitaireButtons'>
            <button onClick={props.handleStartClick}>
                Start
            </button>
            <button>
                Exit
            </button>
        </div>
    )
}

SolitaireButtons.propTypes = {
    handleStartClick: PropTypes.func.isRequired
}