import './BetChooser.scss';
import PropTypes from 'prop-types';
import { isDisabled } from '@testing-library/user-event/dist/utils';

export const BetChooser = (props) => {

    return (
        <div className='row'>
            <button 
            className={`Container ${props.theme}`} 
            onClick={() => {props.addBetDisplay(5)}}
            disabled={(props.funds - props.betDisplay) < 5 ? true : false}
            >
                <div className='chip'>
                   <p>5</p>
                </div>
            </button>
            <button 
            className={`Container ${props.theme}`} 
            onClick={() => {props.addBetDisplay(10)}}
            disabled={(props.funds - props.betDisplay) < 10 ? true : false}
            >
                <div className='chip'>
                    <p>10</p>
                </div>
            </button>
            <button 
            className={`Container ${props.theme}`} 
            onClick={() => {props.addBetDisplay(25)}}
            disabled={(props.funds - props.betDisplay) < 25 ? true : false}
            >
                <div className='chip'>
                    <p>25</p>
                </div>
            </button>
            <button 
            className={`Container ${props.theme}`} 
            onClick={() => {props.addBetDisplay(100)}}
            disabled={(props.funds - props.betDisplay) < 100  ? true : false}
            >
                <div className='chip'>
                    <p>100</p>
                </div>
            </button>
            <button 
            className={`Container ${props.theme}`} 
            onClick={() => {props.addBetDisplay(500)}}
            disabled={(props.funds - props.betDisplay) < 500 ? true : false}
            >
                <div className='chip'>
                    <p>500</p>
                </div>
            </button>
        </div>
    )
}

BetChooser.propTypes = {
    betDisplay: PropTypes.number.isRequired,
    funds: PropTypes.number.isRequired,
    addBetDisplay: PropTypes.func.isRequired,
    theme: PropTypes.string.isRequired
}