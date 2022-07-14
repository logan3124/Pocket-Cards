import './Controls.scss';
import PropTypes from 'prop-types';

export const Controls = (props) => {
    return (
        <div className='blackJackControls'>
            <button onClick={props.handleHitClick}>
                Hit
            </button>
            <button>
                x2
            </button>
            <button onClick={props.handleStandClick}>
                Stand
            </button>
        </div>
    )
}

Controls.propTypes = {
    handleHitClick: PropTypes.func.isRequired,
    handleStandClick: PropTypes.func.isRequired
}