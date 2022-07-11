import './HomePage.scss';
import { Link } from 'react-router-dom';

export const HomePage = () => {

    return (
        <div>
            <h1>Pocket Cards</h1>
            <Link to="/BlackJack">
                <button>Login</button>
            </Link>
            <Link to="/BlackJack">
                <button>Guest</button>
            </Link>
            <Link to="/BlackJack">
                <button>SignUp</button>
            </Link>
        </div>
    )
}