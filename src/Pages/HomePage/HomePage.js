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
        let key = 0;
        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 14; i++) {
                let back = ((j + i) % 2 === 0)
                cards.push(<Card 
                key={key}
                theme='red'
                rank={ranks[Math.round(Math.random() * 13)]}
                suit={suits[Math.round(Math.random() * 4)]}
                back={false}
                color={colors[Math.round(Math.random() * 2)]}
                offX={j * 15.5}
                offY={i * 7.5}/>)
                key++
            }
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
                    <input className="submit" type='submit' value='Submit' />
                </div> : (form === 'signup') ?
                <div className='inputs'>
                    <input placeholder='Email'>
                    </input>
                    <input placeholder='Username'>
                    </input>
                    <input placeholder='Password'>
                    </input>
                    <input placeholder='Confirm Password' value="">
                    </input>
                    <div className='options'>
                        <div>SignUp with Google<img src={google}/></div>
                        <div>SignUp with Facebook<img src={facebook}/></div>
                    </div>
                    <input className="submit" type='submit' value='Submit' />
                </div> : 
                <div className='inputs'>
                    <input></input>
                    <input></input>
                </div>}
            </div>
        </div>
    )
}