import './SolitaireDeck.scss';
import { Card } from '../Card/Card.js';
import PropTypes from 'prop-types';

export const SolitaireDeck = (props) => {
    return (
        <div className='solitaireDeck'>
            <div className='pile'>
                { props.pile1[0] && <Card
                    theme='red' 
                    rank={props.pile1[0].rank} 
                    suit={props.pile1[0].suit} 
                    back={true}
                    color={props.pile1[0].color}
                /> }
            </div>
            <div className='pile'>

            </div>
        </div>
    )
}

SolitaireDeck.propTypes = {
    pile1: PropTypes.array.isRequired,
    pile2: PropTypes.array
}