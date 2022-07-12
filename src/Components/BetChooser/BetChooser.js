import './BetChooser.scss';
import PropTypes from 'prop-types';

export const BetChooser = () => {
    return (
        <div className='row'>
            <div className='Container'>
                <div className='chip'>
                   <p>5</p>
                </div>
            </div>
            <div className='Container'>
                <div className='chip'>
                    <p>10</p>
                </div>
            </div>
            <div className='Container'>
                <div className='chip'>
                    <p>25</p>
                </div>
            </div>
            <div className='Container'>
                <div className='chip'>
                    <p>100</p>
                </div>
            </div>
            <div className='Container'>
                <div className='chip'>
                    <p>500</p>
                </div>
            </div>
        </div>
    )
}

BetChooser.propTypes = {
    funds: PropTypes.number.isRequired,
    toggleBet: PropTypes.func.isRequired
}