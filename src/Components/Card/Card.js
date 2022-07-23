import './Card.scss';
import PropTypes from 'prop-types';

export const Card = (props) => {
    let style;
    if (props.pos !== undefined) {
        style = {
            position: 'relative',
            right: `${2.25 * props.pos}rem`
        }
    } else {
        style = {
            position: 'relative',
            bottom: `${7 * props.offset}rem`
        }
    }

    return (
        <div className={`cardBackground ${props.theme}`} style={style} onClick={props.handleDeckClick ? props.handleDeckClick : () => {}}>
            {props.back ?
            <div className='card b'>
                <p className='back'>X</p>
            </div> :
            <div className={`card f ${props.color}`}>
                <p className='left'>{props.rank}</p>
                <p className='suit'>{props.suit}</p>
                <p className='right'>{props.rank}</p>
            </div>
            } 
        </div>
    )
}

Card.propTypes = {
    theme: PropTypes.string.isRequired,
    rank: PropTypes.string.isRequired,
    suit: PropTypes.string.isRequired,
    back: PropTypes.bool.isRequired,
    pos: PropTypes.number,
    offset: PropTypes.number,
    color: PropTypes.string
}