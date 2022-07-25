import './SolitairePile.scss';
import PropTypes from 'prop-types';
import { Card } from '../Card/Card.js';

export const SolitairePile = (props) => {
    return (
        <div className='pile'>
            {(props.pile.cards.length > 0)? 
            (<Card
                theme='red' 
                rank={props.pile.cards[props.pile.cards.length - 1].rank} 
                suit={props.pile.cards[props.pile.cards.length - 1].suit} 
                back={false}
                color={props.pile.cards[props.pile.cards.length - 1].color}
            />) :
            ( <div className={`cardBackground red`}>
                <div className={`card f grey`}>
                    <p className='suit'>{props.pile.suit}</p>
                </div>
            </div> )
            }
        </div>
    )
}

SolitairePile.propTypes = {
    pile: PropTypes.object.isRequired
}