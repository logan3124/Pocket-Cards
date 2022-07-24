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
    const [draggedCard, setDraggedCard] = useState(({}));

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
                newColumns[`column${j}`].push(({
                    ...dealCard(),
                    back: (j != i)
                }));
            }
        }
        console.log(newColumns)
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

    const cardDrag = (column, index) => {
        setDraggedCard(({
            column: column,
            index: index
        }))
    }

    const deckDrag = (index) => {
        setDraggedCard(({
            column: 0,
            index: index
        }))
    }

    const cardDrop = (column) => {
        let endcard = columns[`column${column}`][columns[`column${column}`].length - 1]
        let card
        console.log(draggedCard.column)
        if (draggedCard.column != 0) {
            card = columns[`column${draggedCard.column}`][draggedCard.index]
        } else {
            card = remainingDeck.pile2[draggedCard.index]
        }
        if ((card.value + 1 == endcard.value) && (card.color != endcard.color)) {
            if (draggedCard.column != 0) {
                let lastcard = {
                    ...columns[`column${draggedCard.column}`][draggedCard.index - 1],
                    back: false
                }
                let list1 = columns[`column${draggedCard.column}`].slice(0, draggedCard.index - 1)
                setColumns((prev) => {
                    return ({
                        ...prev,
                        [`column${column}`]: [...prev[`column${column}`], {...card}],
                        [`column${draggedCard.column}`]: [...list1, lastcard]
                    })
                })
            } else {
                setColumns((prev) => {
                    return ({
                        ...prev,
                        [`column${column}`]: [...prev[`column${column}`], {...card, back: false}]
                    })
                })
            }
        }
        setDraggedCard(({}))
    }

    const deckDrop = (column) => {
        let endcard = columns[`column${column}`][columns[`column${column}`].length - 1]
        let card = remainingDeck.pile2[draggedCard]
        if ((card.value + 1 == endcard.value) && (card.color != endcard.color)) {
            setColumns((prev) => {
                return ({
                    ...prev,
                    [`column${column}`]: [...prev[`column${column}`], {...card}],
                })
            })
        }
        setDraggedCard(({}))
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
                        <SolitaireColumn cardDrag={(index) => cardDrag(1, index)} cardDrop={()=>{cardDrop(1)}} cards={columns.column1}/>
                        <SolitaireColumn cardDrag={(index) => cardDrag(2, index)} cardDrop={()=>{cardDrop(2)}} cards={columns.column2}/>
                        <SolitaireColumn cardDrag={(index) => cardDrag(3, index)} cardDrop={()=>{cardDrop(3)}} cards={columns.column3}/>
                        <SolitaireColumn cardDrag={(index) => cardDrag(4, index)} cardDrop={()=>{cardDrop(4)}} cards={columns.column4}/>
                        <SolitaireColumn cardDrag={(index) => cardDrag(5, index)} cardDrop={()=>{cardDrop(5)}} cards={columns.column5}/>
                        <SolitaireColumn cardDrag={(index) => cardDrag(6, index)} cardDrop={()=>{cardDrop(6)}} cards={columns.column6}/>
                        <SolitaireColumn cardDrag={(index) => cardDrag(7, index)} cardDrop={()=>{cardDrop(7)}} cards={columns.column7}/>
                    </div>
                </div>
                <div className='solitaireCards'>
                    <SolitaireDeck remainingDeck={remainingDeck} deckDrag={deckDrag} handleDeckClick={handleDeckClick}/>
                    <div className='pileRow'>
                        <SolitairePile cardDrop={()=>{cardDrop(7)}}/>
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