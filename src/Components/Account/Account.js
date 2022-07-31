import './Account.scss'
import { Player } from '../Player/Player';
import { useState } from 'react';

export const Account = () => {
    const [form, setForm] = useState('info')

    const handleClick = (button) => {
        return (() => {
            setForm(button)
        })
    }

    return (
        <div className='account'>
            <h1>Pocket Cards</h1>
            <div className='info'>
                <div className='one'>
                    <Player theme='red'/>
                </div>
                <div className='two'>
                    <div className='buttonRow'>
                        <button onClick={handleClick('info')} className={form === 'info' ? 'active first' : 'first'}>Info</button>
                        <button onClick={handleClick('achievments')} className={form === 'achievments' ? 'active' : ''}>Achievments</button>
                        <button onClick={handleClick('stats')} className={form === 'stats' ? 'active last' : 'last'}>Stats</button>
                    </div>
                    <div className='area'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}