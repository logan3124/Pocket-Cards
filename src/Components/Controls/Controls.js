import './Controls.scss';
import PropTypes from 'prop-types';

export const Controls = (props) => {
    return (
        <div className='blackJackControls'>
            <button className={props.theme} onClick={props.handleHitClick}>
                Hit
            </button>
            <button className={props.theme}>
                x2
            </button>
            <button className={props.theme} onClick={props.handleStandClick}>
                Stand
            </button>
        </div>
    )
}

Controls.propTypes = {
    theme: PropTypes.string.isRequired,
    handleHitClick: PropTypes.func.isRequired,
    handleStandClick: PropTypes.func.isRequired
}