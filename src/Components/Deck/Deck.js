import './Deck.scss';
import { Card } from '../Card/Card.js';

export const Deck = () => {
    return (
        <div className='deck'>
            <Card rank="J" suit="♠"/>
            <Card rank="J" suit="♠" m="m"/>
            <Card rank="J" suit="♠" m="mm"/>
        </div>
    )
}