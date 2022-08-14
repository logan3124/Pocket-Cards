import './HomePage.scss';
import { Link } from 'react-router-dom';
import { Card } from '../../Components/Card/Card';
import { Form } from '../../Components/Form/Form';
import { Account } from '../../Components/Account/Account';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

export const HomePage = () => {

    const generateCards = () => {
        let cards = []
        let ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
        let colors = ['Black', 'Red']
        let key = 0;
        let suits = ['♥', '♦', '♠', '♣']
        for (let j = 0; j < 7; j++) {
            for (let i = 0; i < 14; i++) {
                let suit = suits[Math.round(Math.random() * 4)];
                let rank = ranks[Math.round(Math.random() * 13)]
                cards.push(<Card 
                key={key}
                theme='red'
                rank={rank ? rank : '4'}
                suit={suit ? suit : '♥'}
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
            <Route path="/Form"  component={Form} />
            <Route path="/Account" component={Account} />
        </div>
    )
}