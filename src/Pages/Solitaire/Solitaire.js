import './Solitaire.scss';
import { SolitaireColumn } from '../../Components/SolitaireColumn/SolitaireColumn';
import { SolitaireDeck } from '../../Components/SolitaireDeck/SolitaireDeck';
import { SolitairePile } from '../../Components/SolitairePile/SolitairePile';
import { SolitaireButtons } from '../../Components/SolitaireButtons/SolitaireButtons';
import { SolitaireGameButtons } from '../../Components/SolitaireGameButtons/SolitaireGameButtons';
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
        pile1: {
            suit: '♥',
            cards: []
        },
        pile2: {
            suit: '♦',
            cards: []
        },
        pile3: {
            suit: '♠',
            cards: []
        },
        pile4: {
            suit: '♣',
            cards: []
        }
    })

    const [time, setTime] = useState(0);

    const [moves, setMoves] = useState(0);

    const [stage, setStage] = useState('start');

    useEffect(() => {
        checkWin();
    }, [remainingDeck, columns])

    const checkWin = () => {
        if (remainingDeck.pile1.length === 0 && remainingDeck.pile2.length === 0) {
            let ordered = true
            for (const column in columns) {
                for (const card in columns[`columns${column}`]) {
                    console.log(card)
                    if (card.back === true) {
                        ordered = false
                    }
                }
            }
            console.log('win')
        }
    }

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
        setStage('game');
        intervalId = setInterval(() => {
            setTime((prev) => prev + 1)
          }, 1000)
    }

    const handleDeckClick = () => {
        const card = remainingDeck.pile1[0]
        setRemainingDeck((prev) => {
            return ({
                pile1: prev.pile1.slice(1),
                pile2: [card, ...prev.pile2]
            })
        })
        setMoves((prev) => prev + 1)
        setPrevMoves((prev) => {
            return ([
                ...prev,
                ({
                    type: 'deckClick'
                })
            ])
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

    const displayTime = () => {
        let hours = Math.floor('' + (time / 60));  
        let minutes = '' + (time % 60);
        if (hours < 10) {
            hours = '0' + hours
        }
        if (minutes < 10) {
            minutes = '0' + minutes
        }
        return hours + ":" + minutes;
    }

    const cardDrop = (column) => {
        console.log(remainingDeck)
        let endcard 
        endcard = columns[`column${column}`].length > 0 ? columns[`column${column}`][columns[`column${column}`].length - 1] : {value: -1, color: 'N/A'}
        let cards
        console.log(draggedCard.column)
        if (draggedCard.column != 0) {
            cards = columns[`column${draggedCard.column}`].slice(draggedCard.index)
        } else {
            cards = [remainingDeck.pile2[0]]
        }
        console.log(cards)
        if (((cards[0].value + 1 == endcard.value) && (cards[0].color != endcard.color)) || ((columns[`column${column}`].length == 0) && (cards[0].rank == 'K'))) {
            if (draggedCard.column != 0) {
                if (draggedCard.index === 0) {
                    setColumns((prev) => {
                        return ({
                            ...prev,
                            [`column${column}`]: [...prev[`column${column}`], ...cards],
                            [`column${draggedCard.column}`]: []
                        })
                    })
                    setPrevMoves((prev) => {
                        return ([
                            ...prev,
                            ({
                                type: 'cardDrag',
                                prevColumn: draggedCard.column,
                                column: column,
                                index: columns[`column${column}`].length
                            })
                        ])
                    })
                } else {
                    let lastcard = {
                        ...columns[`column${draggedCard.column}`][draggedCard.index - 1],
                        back: false
                    }
                    let list1 = columns[`column${draggedCard.column}`].slice(0, draggedCard.index - 1)
                    setColumns((prev) => {
                        return ({
                            ...prev,
                            [`column${column}`]: [...prev[`column${column}`], ...cards],
                            [`column${draggedCard.column}`]: [...list1, lastcard]
                        })
                    })
                    setPrevMoves((prev) => {
                        return ([
                            ...prev,
                            ({
                                type: 'cardDrag',
                                prevColumn: draggedCard.column,
                                column: column,
                                index: columns[`column${column}`].length
                            })
                        ])
                    })
                }
            } else {
                setColumns((prev) => {
                    return ({
                        ...prev,
                        [`column${column}`]: [...prev[`column${column}`], {...cards[0], back: false}]
                    })
                })
                setRemainingDeck((prev) => {
                    return ({
                        ...prev,
                        pile2: prev.pile2.slice(1)
                    })
                })
                setPrevMoves((prev) => {
                    return ([
                        ...prev,
                        ({
                            type: 'deckDrag',
                            column: column,
                            index: columns[`column${column}`].length
                        })
                    ])
                })
            }
            setMoves((prev) => prev + 1);
        }
        checkWin();
        setDraggedCard(({}))
    }

    const [prevMoves, setPrevMoves] = useState([])

    const handleUndo = () => {
        let prevMove = prevMoves.length > 0 ? prevMoves[prevMoves.length - 1] : {type: 'N/A'}
        switch (prevMove.type) {
            case ('deckClick'):
                setRemainingDeck((prev) => {
                    return ({
                        pile1: [{...prev.pile2[0]}, ...prev.pile1],
                        pile2: prev.pile2.slice(1)
                    })
                })
                break;
            case ('deckDrag'):
                setRemainingDeck((prev) => {
                    return ({
                        ...prev,
                        pile2: [{...columns[`column${prevMove.column}`][prevMove.index]}, ...prev.pile2]
                    })
                })
                setColumns((prev) => {
                    return ({
                        ...prev, 
                        [`column${prevMove.column}`]: prev[[`column${prevMove.column}`]].slice(0, -1)
                    })
                })
                break;
            case ('cardDrag'):
                break;
            case ('cardClick'):
                setColumns((prev) => {
                    let endCard = ({
                        ...prev[`column${prevMove.prevColumn}`][prev[`column${prevMove.prevColumn}`].length - 1],
                        back: true
                    })
                    return({
                        ...prev,
                        [`column${prevMove.prevColumn}`]: [...prev[`column${prevMove.prevColumn}`].slice(0, -1), endCard, {...endPile[prevMove.pile].cards[0]}]
                    })
                })
                setEndPile((prev) => {
                    return ({
                        ...prev,
                        [prevMove.pile]: ({
                            suit: prev[prevMove.pile].suit,
                            cards: prev[prevMove.pile].cards.slice(1)
                        })
                    })
                })
                break;
            case ('deckCardClick'):
                setRemainingDeck((prev) => {
                    return ({
                        ...prev,
                        pile2: [{...endPile[prevMove.pile].cards[0]}, ...prev.pile2]
                    })
                })
                setEndPile((prev) => {
                    return ({
                        ...prev,
                        [prevMove.pile]: ({
                            suit: prev[prevMove.pile].suit,
                            cards: prev[prevMove.pile].cards.slice(1)
                        })
                    })
                })
                break;
            default:
                break;
        }
        setPrevMoves((prev) => {
            return prev.slice(0, -1)
        })
    }

    const clickCard = (column, index) => {
        let card
        if (column !== 0) {
            card = columns[`column${column}`][index]
        } else {
            card = remainingDeck.pile2[0]
        }
        console.log(card);
        for (const pile in endPile) {
            let endPileValue = (endPile[pile].cards.length != 0 ? endPile[pile].cards[0].value : 0)
            let endPileSuit = endPile[pile].suit
            if (card.value - 1 ===  endPileValue && card.suit === endPileSuit) {
                setEndPile((prev) => ({
                    ...prev,
                    [pile]: ({
                        suit: endPileSuit,
                        cards: [card, ...prev[pile].cards]
                    })
                }))
                if (column != 0 && columns[`column${column}`].length === 1) {
                    setColumns((prev) => {
                        return ({
                            ...prev,
                            [`column${column}`]: []
                        })
                    })
                    setPrevMoves((prev) => {
                        return ([
                            ...prev,
                            ({
                                type: 'cardClick',
                                prevColumn: column,
                                pile: pile
                            })
                        ])
                    })
                }
                else if (column != 0 && columns[`column${column}`].length > 1) {
                    let endCard = ({
                        ...columns[`column${column}`][columns[`column${column}`].length - 2],
                        back: false
                    })
                    console.log(columns[`column${column}`][[`column${column}`].length - 2])
                    setColumns((prev) => {
                        return ({
                            ...prev,
                            [`column${column}`]: [...prev[`column${column}`].slice(0, -2), endCard]
                        })
                    })
                    setPrevMoves((prev) => {
                        return ([
                            ...prev,
                            ({
                                type: 'cardClick',
                                prevColumn: column,
                                pile: pile
                            })
                        ])
                    })
                } else {
                    setRemainingDeck((prev) => {
                        return ({
                            ...prev,
                            pile2: prev.pile2.slice(1)
                        })
                    })
                    setPrevMoves((prev) => {
                        return ([
                            ...prev,
                            ({
                                type: 'deckCardClick',
                                pile: pile
                            })
                        ])
                    })
                }
                setMoves((prev) => prev + 1);
            }
        }
        checkWin();
    }

    const resetPile = () => {
        let newDeck = []
        for (let i = remainingDeck.pile2.length - 1; i >= 0; i--) {
            newDeck.push(remainingDeck.pile2[i]) 
        }
        setRemainingDeck(({
            pile1: newDeck,
            pile2: []
        }));
    }

    return (
        <div className='solitaire'>
            <header className='top'>
                <div className='menu'>Menu</div>
                <div className='stat'>{displayTime()}</div>
                <h1>Pocket Cards</h1>
                <div className='stat'>Moves: {moves}</div>
                <div className='theme'>Theme</div>
            </header>
            <main>
                <div className='solitaireDisplay'>
                    <div className='playerRow'>
                        <Player theme='red' />
                        <SolitaireDeck clickCard={() => clickCard(0, 0)} remainingDeck={remainingDeck} resetPile={resetPile} deckDrag={deckDrag} handleDeckClick={handleDeckClick}/>
                    </div>
                    <div className='middle'>
                        <div className='solitaireRow'>
                            <SolitaireColumn clickCard={(index) => clickCard(1, index)} cardDrag={(index) => cardDrag(1, index)} cardDrop={()=>{cardDrop(1)}} cards={columns.column1}/>
                            <SolitaireColumn clickCard={(index) => clickCard(2, index)} cardDrag={(index) => cardDrag(2, index)} cardDrop={()=>{cardDrop(2)}} cards={columns.column2}/>
                            <SolitaireColumn clickCard={(index) => clickCard(3, index)} cardDrag={(index) => cardDrag(3, index)} cardDrop={()=>{cardDrop(3)}} cards={columns.column3}/>
                            <SolitaireColumn clickCard={(index) => clickCard(4, index)} cardDrag={(index) => cardDrag(4, index)} cardDrop={()=>{cardDrop(4)}} cards={columns.column4}/>
                            <SolitaireColumn clickCard={(index) => clickCard(5, index)} cardDrag={(index) => cardDrag(5, index)} cardDrop={()=>{cardDrop(5)}} cards={columns.column5}/>
                            <SolitaireColumn clickCard={(index) => clickCard(6, index)} cardDrag={(index) => cardDrag(6, index)} cardDrop={()=>{cardDrop(6)}} cards={columns.column6}/>
                            <SolitaireColumn clickCard={(index) => clickCard(7, index)} cardDrag={(index) => cardDrag(7, index)} cardDrop={()=>{cardDrop(7)}} cards={columns.column7}/>
                        </div>
                        {stage === 'start' ? 
                        <SolitaireButtons handleStartClick={handleStartClick}/> : 
                        <SolitaireGameButtons handleUndo={handleUndo}/>}
                    </div>
                    <div className='pileRow'>
                        <SolitairePile pile={endPile.pile1}/>
                        <SolitairePile pile={endPile.pile2}/>
                        <SolitairePile pile={endPile.pile3}/>
                        <SolitairePile pile={endPile.pile4}/>
                    </div>
                </div>
            </main>
        </div>
    )
}