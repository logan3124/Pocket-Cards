import './Card.scss';
import PropTypes from 'prop-types';

export const Card = (props) => {
    let style;
    let newstyle = {};
    if (props.pos !== undefined) {
        style = {
            position: 'relative',
            right: `${2.25 * props.pos}rem`
        }
    } else if(props.offset !== undefined) {
        style = {
            position: 'absolute',
            top: `${2.75 * props.offset}rem`
        }
    } else if (props.offX !== undefined) {
        style = {
            position: 'absolute',
            top: `${props.offX}%`,
            left: `${props.offY}%`,
            transform: `rotate(${Math.round(Math.random() * 360)}deg)`,
            background: 'transparent',
            zIndex: Math.round(Math.random() * 5)
        }
        newstyle = {
            //boxShadow: '1px 1px 6px lightgrey',
            border: '1px solid lightgray'
        }
    }

    return (
        <div className={`cardBackground ${props.theme}`} style={style} onClick={props.handleDeckClick ? props.handleDeckClick : props.handleClick ? props.handleClick : () => {}}>
            {props.back ?
            <div className='card b'>
                <p className='back'>X</p>
            </div> :
            <div className={`card f ${props.color}`} draggable='true' onDragStart={props.handleDrag} style={newstyle}>
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