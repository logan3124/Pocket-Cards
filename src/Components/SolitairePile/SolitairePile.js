import './SolitairePile.scss';
import PropTypes from 'prop-types';
import { Card } from '../Card/Card.js';

export const SolitairePile = (props) => {
    return (
        <div className='pile'>
            {(props.cards.length > 0)? 
            (<Card
                theme='red' 
                rank={props.cards[props.cards.length - 1].rank} 
                suit={props.cards[props.cards.length - 1].suit} 
                back={false}
                color={props.cards[props.cards.length - 1].color}
            />) :
            ( <div className={`cardBackground red`}>
                <div className={`card f grey`}>
                    <p className='suit'>{props.suit}</p>
                </div>
            </div> )
            }
        </div>
    )
}

SolitairePile.propTypes = {
    suit: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired
}