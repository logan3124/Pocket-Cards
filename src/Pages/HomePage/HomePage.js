import './HomePage.scss';
import { Link } from 'react-router-dom';

export const HomePage = () => {

    return (
        <div>
            <h1>Pocket Cards</h1>
            <Link>
                <button>Login</button>
            </Link>
            <Link>
                <button>Guest</button>
            </Link>
            <Link>
                <button>SignUp</button>
            </Link>
        </div>
    )
}