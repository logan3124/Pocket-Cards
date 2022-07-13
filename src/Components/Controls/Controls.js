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
            <button>
                Stand
            </button>
        </div>
    )
}

Controls.propTypes = {
    handleHitClick: PropTypes.func.isRequired
}