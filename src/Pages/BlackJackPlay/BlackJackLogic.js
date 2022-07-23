
export const deck = []

for (let i = 2; i < 11; i++) {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        deck.push((
            {
                rank: i.toString(),
                suit: suit,
                value: i,
            }
        ))
    })
}

['J', 'Q', 'K'].forEach(rank => {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        let obj = {
            rank: rank,
            suit: suit,
            value: 10,
        }
        deck.push(obj);
    })
})



deck.push((
    {
        rank: 'A',
        suit: '♥',
        value: 11
    }
))
deck.push((
    {
        rank: 'A',
        suit: '♦',
        value: 11
    }
))
deck.push((
    {
        rank: 'A',
        suit: '♠',
        value: 11
    }
))
deck.push((
    {
        rank: 'A',
        suit: '♣',
        value: 11
    }
))

export let blackJackDeck = deck.slice();

export const shuffleDeck = () => {
    let newDeck = [];
    for (let i = 0; i < 52; i++) {
        newDeck.push(blackJackDeck.splice(Math.floor(Math.random() * (blackJackDeck.length - i)), 1)[0])
    }
    blackJackDeck = newDeck;
}

shuffleDeck();
shuffleDeck();
shuffleDeck();
shuffleDeck();

export const dealCard = () => {
    return blackJackDeck.pop();
}

export const resetDeck = () => {
    blackJackDeck = deck.slice();
}

console.log(blackJackDeck)