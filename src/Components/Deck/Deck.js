import './Deck.scss';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const Deck = (props) => {

    return (
        <div className='deck'>
            {(props.stage === "end" || !props.stage) ?
                props.cards.map((card, index) => {
                    return (<Card
                        theme={props.theme} 
                        key={index.toString()} 
                        rank={card.rank} 
                        suit={card.suit} 
                        back={false}
                        pos={index}
                    />)
                }) :
                props.cards.map((card, index) => {
                    return (<Card
                        theme={props.theme} 
                        key={index.toString()} 
                        rank={card.rank} 
                        suit={card.suit} 
                        back={index===0}
                        pos={index}
                    />)
                })
            }
            {props.total === 0 ?
                <p></p>:
                (props.stage === "end" || !props.stage) ?
                    <p className='value' style={{position: 'relative', right: `${2.25 * (props.cards.length - 1)}rem`}}>{props.total}</p> :
                    <p className='value' style={{position: 'relative', right: `${2.25 * (props.cards.length - 1)}rem`}}>?</p>
            }
            
        </div>
    )
}

Deck.propTypes = {
    theme: PropTypes.string.isRequired,
    stage: PropTypes.string,
    cards: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
}