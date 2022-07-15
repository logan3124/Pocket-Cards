import './Dealer.scss';
import guy2 from '../../images/guy2.svg';
import PropTypes from 'prop-types';

export const Dealer = (props) => {
    return (
        <div className='dealer'>
            <img src={guy2} className={props.theme}/>
            <p className={props.theme}>Dealer</p>
        </div>
    )
}

Dealer.propTypes = {
    theme: PropTypes.string.isRequired
}