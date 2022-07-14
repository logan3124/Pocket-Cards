import './StartControls.scss';
import PropTypes from 'prop-types';

export const StartControls = (props) => {
    return (
        <div className="startControls">
            <button onClick={props.handleEditClick}>
                Edit Bet
            </button>
            <button onClick={props.handleDealClick}>
                Deal
            </button>
        </div>
    )
}

StartControls.propTypes = {
    handleEditClick: PropTypes.func.isRequired,
    handleDealClick: PropTypes.func.isRequired
}