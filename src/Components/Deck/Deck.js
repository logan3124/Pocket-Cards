import './Deck.scss';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const Deck = (props) => {
    return (
        <div className='deck'>
            {props.cards.map((card) => {
                return (<Card rank={card.rank} suit={card.suit} back={false}/>)
            })}
        </div>
    )
}

Deck.propTypes = {
    cards: PropTypes.array.isRequired
}