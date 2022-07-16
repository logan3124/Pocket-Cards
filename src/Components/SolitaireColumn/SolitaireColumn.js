import './SolitaireColumn.scss';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const SolitaireColumn = (props) => {
    return (
        <div className='column'>
            {props.cards.map((card, index) => {
                return (<Card
                    theme='red' 
                    key={index.toString()} 
                    rank={card.rank} 
                    suit={card.suit} 
                    back={(index != props.cards.length - 1)}
                    color={card.color}
                    offset={index}
                />)
            })}
        </div>
    )
}

SolitaireColumn.propTypes = {
    cards: PropTypes.array.isRequired
}