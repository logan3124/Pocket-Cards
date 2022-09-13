import './GameSelect.scss';
import { Player } from '../Player/Player';

export const GameSelect = (props) => {
    return (
        <div className='account'>
            <header>
                <Player theme='red' size='small'/>
                <h1>Pocket Cards</h1>
            </header>
        </div>
    )
}