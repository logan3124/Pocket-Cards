import './Account.scss'
import edit from '../../images/edit3.svg';
import { Player } from '../Player/Player';
import { Achievement } from '../Achievment/Achievement';
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
                    <div className='playerimage'>
                        <Player theme='red'/>
                        <div className='edit'>
                            <img src={edit} />
                        </div>
                    </div>
                    <div className='status'>
                        <div className='rank'>
                            <div>
                                &#9650;
                                {/* &#9751; */}
                                {/* &#9733; */}
                                {/* &#9830; */}
                                {/* &#10059; */}
                            </div>
                        </div>
                        <div className='level'>
                            <p>Level 1</p>
                            <div className='progression'>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='two'>
                    <div className='buttonRow'>
                        <button onClick={handleClick('info')} className={form === 'info' ? 'active first' : 'first'}>Info</button>
                        <button onClick={handleClick('achievments')} className={form === 'achievments' ? 'active' : ''}>Achievments</button>
                        <button onClick={handleClick('stats')} className={form === 'stats' ? 'active last' : 'last'}>Stats</button>
                    </div>
                    <div className='area'>
                        {form === 'info' ? 
                        <div>

                        </div> : form === 'achievments' ?
                        <div>
                            <Achievement name='Speed King' description='Win 10 games of solitatire in under 10 minutes'/>
                            <Achievement name='Experienced' description='Play 100 games of solitaire'/>
                        </div> : 
                        <div>
                            <div className='s'>
                                <p className='title'>Solitaire</p>
                                <p>Standard Plays: </p>
                                <p>Standard Wins: </p>
                                <p>Timed Plays: </p>
                                <p>Timed Wins: </p>
                            </div>
                            <div className='s'>
                                <p className='title'>Black Jack</p>
                                <p>Standard Plays: </p>
                                <p>Standard Wins: </p>
                                <p>Multiplier Plays: </p>
                                <p>Multiplier Wins: </p>
                            </div>
                            <div className='s'>
                                <p className='title'>Poker</p>
                                <p>Standard Plays: </p>
                                <p>Standard Wins: </p>
                                <p>Bomb Plays: </p>
                                <p>Bomb Wins: </p>
                            </div>
                        </div> }
                    </div>
                </div>
            </div>
        </div>
    )
}