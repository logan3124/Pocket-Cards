import './Player.scss';
import girl2 from '../../images/girl2.svg';
import PropTypes from 'prop-types';

export const Player = (props) => {
    return (
        <div className='player'>
            <img src={girl2} className={props.theme}/>
            <p className={props.theme}>Player</p>
        </div>
    )
}

Player.propTypes = {
    theme: PropTypes.string.isRequired
}