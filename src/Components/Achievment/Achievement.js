import './Achievement.scss';
import grandma from '../../images/grandma.svg';

export const Achievement = (props) => {
    return (
        <div className='achievement'>
            <div className='words'>
                <p className='name'>{props.name}</p>
                <p className='description'>{props.description}</p>
                <div className='progress'>
                    <div></div>
                    <p className='number'>3/10</p>
                </div>
            </div>
            <div className='reward'>
                <p className='name'>Reward</p>
                <div className='container'>
                    <img src={grandma} />
                </div>
            </div>
        </div>
    )
}