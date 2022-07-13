import './Deck.scss';
import { Card } from '../Card/Card.js';

export const Deck = () => {
    return (
        <div className='deck'>
            <Card rank="J" suit="♠" back={false}/>
            <Card rank="J" suit="♠" back={true}/>
            <Card rank="J" suit="♠" back={true}/>
        </div>
    )
}