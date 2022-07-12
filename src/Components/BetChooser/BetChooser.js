import './BetChooser.scss';
import PropTypes from 'prop-types';

export const BetChooser = (props) => {

    return (
        <div className='row'>
            <div className='Container' onClick={() => {props.addBetDisplay(5)}}>
                <div className='chip'>
                   <p>5</p>
                </div>
            </div>
            <div className='Container' onClick={() => {props.addBetDisplay(10)}}>
                <div className='chip'>
                    <p>10</p>
                </div>
            </div>
            <div className='Container' onClick={() => {props.addBetDisplay(25)}}>
                <div className='chip'>
                    <p>25</p>
                </div>
            </div>
            <div className='Container' onClick={() => {props.addBetDisplay(100)}}>
                <div className='chip'>
                    <p>100</p>
                </div>
            </div>
            <div className='Container' onClick={() => {props.addBetDisplay(500)}}>
                <div className='chip'>
                    <p>500</p>
                </div>
            </div>
        </div>
    )
}

BetChooser.propTypes = {
    funds: PropTypes.number.isRequired,
    addBetDisplay: PropTypes.func.isRequired
}