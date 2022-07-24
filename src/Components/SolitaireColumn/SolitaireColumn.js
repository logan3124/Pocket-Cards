import './SolitaireColumn.scss';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const SolitaireColumn = (props) => {
    const handleDragOver = (e) => {
        e.preventDefault()
    }

    const handleDrop = (e) => {
        e.preventDefault()
        props.cardDrop()
    }

    return (
        <div className='column' onDragOver={handleDragOver} onDrop={handleDrop}>
            {props.cards.map((card, index) => {
                return (<Card
                    theme='red' 
                    key={index.toString()} 
                    rank={card.rank} 
                    suit={card.suit} 
                    back={(index != props.cards.length - 1)}
                    color={card.color}
                    offset={index}
                    cardDrag={(event) => props.cardDrag(card)}
                />)
            })}
        </div>
    )
}

SolitaireColumn.propTypes = {
    cards: PropTypes.array.isRequired
}