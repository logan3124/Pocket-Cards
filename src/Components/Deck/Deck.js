import './Deck.scss';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const Deck = (props) => {
    const calculateTotal = () => {
        let total = 0;
        props.cards.forEach((card) => {
            total += card.value;
        })
        return total;
    }

    return (
        <div className='deck'>
            {props.cards.map((card, index) => {
                return (<Card key={index.toString()} rank={card.rank} suit={card.suit} back={false}/>)
            })}
            <p className='value'>{calculateTotal()}</p>
        </div>
    )
}

Deck.propTypes = {
    cards: PropTypes.array.isRequired
}