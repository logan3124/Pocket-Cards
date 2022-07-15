import './Card.scss';
import PropTypes from 'prop-types';

export const Card = (props) => {
    return (
        <div className='cardBackground' style={{position: 'relative', right: `${2.25 * props.pos}rem`}}>
            {props.back ?
            <div className='card b'>
                <p className='back'>X</p>
            </div> :
            <div className='card f'>
                <p className='left'>{props.rank}</p>
                <p className='suit'>{props.suit}</p>
                <p className='right'>{props.rank}</p>
            </div>
            } 
        </div>
    )
}

Card.propTypes = {
    rank: PropTypes.string.isRequired,
    suit: PropTypes.string.isRequired,
    back: PropTypes.bool.isRequired,
    pos: PropTypes.number.isRequired
}