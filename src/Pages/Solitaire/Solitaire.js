import './Solitaire.scss';
import { SolitaireColumn } from '../../Components/SolitaireColumn/SolitaireColumn';
import { SolitaireDeck } from '../../Components/SolitaireDeck/SolitaireDeck';
import { SolitairePile } from '../../Components/SolitairePile/SolitairePile';
import { SolitaireButtons } from '../../Components/SolitaireButtons/SolitaireButtons';
import { dealCard, resetDeck, shuffleDeck } from './SolitaireLogic.js';
import { Player } from '../../Components/Player/Player';
import { useState, useEffect } from 'react';

export const Solitaire = () => {
    const [columns, setColumns] = useState({
        column1: [],
        column2: [],
        column3: [],
        column4: [],
        column5: [],
        column6: [],
        column7: []
    })

    const handleStartClick = () => {
        let newColumns = {
            column1: [],
            column2: [],
            column3: [],
            column4: [],
            column5: [],
            column6: [],
            column7: []
        }
        for (let i = 1; i < 8; i++) {
            for (let j = i; j < 8; j++) {
                newColumns[`column${j}`].push(dealCard());
            }
        }
        console.log(newColumns);
        setColumns(({...newColumns}));
    }

    return (
        <div className='solitaire'>
            <header className='top'>
                <div className='menu'>Menu</div>
                <div className='bet'>{0}</div>
                <h1>Pocket Cards</h1>
                <div className='funds'>{0}</div>
                <div className='theme'>Theme</div>
            </header>
            <main>
                <div className='solitaireDisplay'>
                    <div className='playerRow'>
                        <Player theme='red' />
                        <p>Time: </p>
                        <p>Moves: </p>
                        <p>Score: </p>
                    </div>
                    <div className='solitaireRow'>
                        <SolitaireColumn cards={columns.column1}/>
                        <SolitaireColumn cards={columns.column2}/>
                        <SolitaireColumn cards={columns.column3}/>
                        <SolitaireColumn cards={columns.column4}/>
                        <SolitaireColumn cards={columns.column5}/>
                        <SolitaireColumn cards={columns.column6}/>
                        <SolitaireColumn cards={columns.column7}/>
                    </div>
                </div>
                <div className='solitaireCards'>
                    <SolitaireDeck />
                    <div className='pileRow'>
                        <SolitairePile />
                        <SolitairePile />
                        <SolitairePile />
                        <SolitairePile />
                    </div>
                </div>
            </main>
            <footer>
                <SolitaireButtons handleStartClick={handleStartClick}/>
            </footer>
        </div>
    )
}