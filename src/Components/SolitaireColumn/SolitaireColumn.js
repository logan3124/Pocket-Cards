import './SolitaireColumn.scss';
import { Card } from '../Card/Card.js';

export const SolitaireColumn = () => {
    return (
        <div className='column'>
            <Card theme='red' rank='J' suit='♠' back={false} pos={0} />
        </div>
    )
}