import './HomePage.scss';
import { Link } from 'react-router-dom';
import { Card } from '../../Components/Card/Card';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import { useState } from 'react';

export const HomePage = () => {
    const [form, setForm] = useState('login')

    const handleClick = (button) => {
        return (() => {
            setForm(button)
        })
    }

    const generateCards = () => {
        let cards = []
        let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        let suits = ['♥', '♦', '♠', '♣']
        let colors = ['Black', 'Red']
        for (let i = 0; i < 50; i++) {
            cards.push(<Card 
            key={i}
            theme='red'
            rank={ranks[Math.round(Math.random() * ranks.length)]}
            suit={suits[Math.round(Math.random() * suits.length)]}
            back={false}
            color={colors[Math.round(Math.random() * colors.length)]}
            offX={Math.round(100 * Math.random())}
            offY={Math.round(100 * Math.random())}/>)
        }
        return cards
    }

    return (
        <div className='home'>
            {generateCards()}
            <div className='form'>
                <h1>Pocket Cards</h1>
                <div className='buttonRow'>
                    <button onClick={handleClick('login')} className={form === 'login' ? 'active' : ''}>Login</button>
                    <button onClick={handleClick('signup')} className={form === 'signup' ? 'active' : ''}>SignUp</button>
                    <button onClick={handleClick('guest')} className={form === 'guest' ? 'active' : ''}>Guest</button>
                </div>
                {form === 'login' ? 
                <div className='inputs'>
                    <input placeholder='Username'>
                    </input>
                    <input placeholder='Password'>
                    </input>
                    <div className='options'>
                        <div>Login with Google<img src={google}/></div>
                        <div>Login with Facebook<img src={facebook}/></div>
                    </div>
                </div> : (form === 'signup') ?
                <div className='inputs'>
                    <input></input>
                    <input></input>
                </div> : 
                <div className='inputs'>
                    <input></input>
                    <input></input>
                </div>}
            </div>
        </div>
    )
}