import './StartControls.scss';
import PropTypes from 'prop-types';

export const StartControls = (props) => {
    return (
        <div className="startControls">
            <button className={props.theme} onClick={props.handleEditClick}>
                Edit Bet
            </button>
            <button className={props.theme} onClick={props.handleDealClick}>
                Deal
            </button>
        </div>
    )
}

StartControls.propTypes = {
    theme: PropTypes.string.isRequired,
    handleEditClick: PropTypes.func.isRequired,
    handleDealClick: PropTypes.func.isRequired
}