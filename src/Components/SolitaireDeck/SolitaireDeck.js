import './SolitaireDeck.scss';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const SolitaireDeck = (props) => {

    return (
        <div className='solitaireDeck'>
            <div className='pile'>
                { props.remainingDeck.pile1[0] && <Card
                    theme='red' 
                    rank={props.remainingDeck.pile1[0].rank} 
                    suit={props.remainingDeck.pile1[0].suit} 
                    back={true}
                    color={props.remainingDeck.pile1[0].color}
                    handleDeckClick={props.handleDeckClick}
                /> }
            </div>
            <div className='pile'>
                { props.remainingDeck.pile2[0] && <Card
                    theme='red'
                    rank={props.remainingDeck.pile2[0].rank} 
                    suit={props.remainingDeck.pile2[0].suit} 
                    back={false}
                    color={props.remainingDeck.pile2[0].color}
                />}
            </div>
        </div>
    )
}

SolitaireDeck.propTypes = {
    remainingDeck: PropTypes.object.isRequired
}