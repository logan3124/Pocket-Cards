import './Form.scss';
import google from '../../images/google.svg';
import facebook from '../../images/facebook.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Form = () => {
    const [form, setForm] = useState('login')

    const handleClick = (button) => {
        return (() => {
            setForm(button)
        })
    }

    return (
        <div className='form'>
                <h1>Pocket Cards</h1>
                <div className='buttonRow'>
                    <button onClick={handleClick('login')} className={form === 'login' ? 'active' : ''}>Login</button>
                    <button onClick={handleClick('signup')} className={form === 'signup' ? 'active' : ''}>SignUp</button>
                    <button onClick={handleClick('guest')} className={form === 'guest' ? 'active' : ''}>Guest</button>
                </div>
                {form === 'login' ? 
                <form className='inputs'>
                    <input placeholder='Username' required />
                    <input placeholder='Password' required />
                    <div className='options'>
                        <div>Login with Google<img src={google}/></div>
                        <div>Login with Facebook<img src={facebook}/></div>
                    </div>
                    <input className="submit" type='submit' value='Submit' />
                </form> : (form === 'signup') ?
                <form className='inputs'>
                    <div className='options'>
                        <input placeholder="First Name"></input>
                        <input placeholder="Last Name"></input>
                    </div>
                    <input placeholder='Username'>
                    </input>
                    <input placeholder='Password'>
                    </input>
                    <input placeholder='Confirm Password'>
                    </input>
                    <div className='options'>
                        <div>SignUp with Google<img src={google}/></div>
                        <div>SignUp with Facebook<img src={facebook}/></div>
                    </div>
                    <input className="submit" type='submit' value='Submit' />
                </form> : 
                <form className='inputs'>
                    <div className='options'>
                        <input placeholder="First Name" required />
                        <input placeholder="Last Name"/>
                    </div>
                    <input placeholder='Username' required/>
                    <Link to="/Account">
                        <input className="submit" type='submit' value='Submit' />
                    </Link>
                </form>}
            </div>
    )
}