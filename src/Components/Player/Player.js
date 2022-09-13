import './Player.scss';
import girl2 from '../../images/girl2.svg';
import PropTypes from 'prop-types';

export const Player = (props) => {
    return (
        <div className='player'>
            <img src={girl2} className={`${props.theme} + ${props.size}`}/>
            <p className={`${props.theme} + ${props.size}`}>logan3124</p>
        </div>
    )
}

Player.propTypes = {
    size: PropTypes.string,
    theme: PropTypes.string.isRequired
}