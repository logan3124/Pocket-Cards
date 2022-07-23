import './Solitaire.scss';
import { SolitaireColumn } from '../../Components/SolitaireColumn/SolitaireColumn';
import { SolitaireDeck } from '../../Components/SolitaireDeck/SolitaireDeck';
import { SolitairePile } from '../../Components/SolitairePile/SolitairePile';
import { SolitaireButtons } from '../../Components/SolitaireButtons/SolitaireButtons';
import { solitaireDeck, dealCard, resetDeck, shuffleDeck } from './SolitaireLogic.js';
import { Player } from '../../Components/Player/Player';
import { useState, useEffect } from 'react';

export const Solitaire = () => {
    let intervalId;

    const [columns, setColumns] = useState({
        column1: [],
        column2: [],
        column3: [],
        column4: [],
        column5: [],
        column6: [],
        column7: []
    })

    const [remainingDeck, setRemainingDeck] = useState({
        pile1: [],
        pile2: []
    });
    
    const [endPile, setEndPile] = useState({
        pile1: [],
        pile2: [],
        pile3: [],
        pile4: []
    })

    const [time, setTime] = useState(0);

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
        setColumns(({...newColumns}));
        setRemainingDeck(({pile1: solitaireDeck.slice(), pile2: []}));
        intervalId = setInterval(() => {
            setTime((prev) => prev + 1)
          }, 1000)
    }

    const handleDeckClick = () => {
        const card = remainingDeck.pile1[remainingDeck.pile1.length - 1]
        setRemainingDeck((prev) => {
            return ({
                pile1: prev.pile1.slice(0, -1),
                pile2: [card, ...prev.pile2]
            })
        })
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
                        <p>Time: {time}</p>
                        <p>Moves: 0</p>
                        <p>Score: 0</p>
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
                    <SolitaireDeck remainingDeck={remainingDeck} handleDeckClick={handleDeckClick}/>
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