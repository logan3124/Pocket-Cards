import './Player.scss';
import grandpa from '../../images/grandpa.svg';

export const Player = () => {
    return (
        <div className='player'>
            <img src={grandpa} />
            <p>Player</p>
        </div>
    )
}