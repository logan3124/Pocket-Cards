import './Deck.scss';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const Deck = (props) => {

    return (
        <div className='deck'>
            {(props.stage === "end" || !props.stage) ?
                props.cards.map((card, index) => {
                    return (<Card key={index.toString()} rank={card.rank} suit={card.suit} back={false}/>)
                }) :
                props.cards.map((card, index) => {
                    return (<Card key={index.toString()} rank={card.rank} suit={card.suit} back={index===0}/>)
                })
            }
            {props.total === 0 ?
                <p></p>:
                (props.stage === "end" || !props.stage) ?
                    <p className='value'>{props.total}</p> :
                    <p className='value'>?</p>
            }
            
        </div>
    )
}

Deck.propTypes = {
    stage: PropTypes.string,
    cards: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
}