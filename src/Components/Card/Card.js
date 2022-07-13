import './Card.scss';
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
        <div className={'cardBackground' + ' ' + props.m}>
            <div className='card'>
                <p className='left'>{props.rank}</p>
                <p className='suit'>{props.suit}</p>
                <p className='right'>{props.rank}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    rank: PropTypes.string.isRequired,
    suit: PropTypes.string.isRequired
}