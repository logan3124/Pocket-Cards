
const deck = []

for (let i = 2; i < 11; i++) {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        deck.push((
            {
                rank: i.toString(),
                suit: suit,
                value: i
            }
        ))
    })
}

['J', 'Q', 'K'].forEach(rank => {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        let obj = {
            rank: rank,
            suit: suit,
            value: 10
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

const shuffleDeck = (deck) => {
    let newDeck = [];
    for (let i = 0; i < 52; i++) {
        newDeck.push(deck.splice(Math.floor(Math.random() * (deck.length - i)), 1)[0])
    }
    return newDeck;
}

export let blackJackDeck = shuffleDeck(shuffleDeck(shuffleDeck(shuffleDeck(deck.slice()))));

export const dealCard = () => {
    return blackJackDeck.pop();
}

export const resetDeck = () => {
    blackJackDeck = deck.slice();
}