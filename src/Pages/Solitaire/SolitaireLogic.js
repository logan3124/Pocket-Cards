const deck = []

for (let i = 2; i < 11; i++) {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        deck.push((
            {
                rank: i.toString(),
                suit: suit,
                value: i,
                color: (suit === '♥' || suit === '♦') ? 'Red' : 'Black'
            }
        ))
    })
}

['J', 'Q', 'K'].forEach((rank, index) => {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        let obj = {
            rank: rank,
            suit: suit,
            value: (10 + index + 1),
            color: (suit === '♥' || suit === '♦') ? 'Red' : 'Black'

        }
        deck.push(obj);
    })
})



deck.push((
    {
        rank: 'A',
        suit: '♥',
        value: 1,
        color: 'Red'
    }
))
deck.push((
    {
        rank: 'A',
        suit: '♦',
        value: 1,
        color: 'Red'
    }
))
deck.push((
    {
        rank: 'A',
        suit: '♠',
        value: 1,
        color: 'Black'
    }
))
deck.push((
    {
        rank: 'A',
        suit: '♣',
        value: 1,
        color: 'Black'
    }
))

export let solitaireDeck = deck.slice();

export const shuffleDeck = () => {
    let newDeck = [];
    for (let i = 0; i < 52; i++) {
        newDeck.push(solitaireDeck.splice(Math.floor(Math.random() * (solitaireDeck.length - i)), 1)[0])
    }
    solitaireDeck = newDeck;
}

shuffleDeck();
shuffleDeck();
shuffleDeck();
shuffleDeck();
shuffleDeck();
shuffleDeck();
shuffleDeck();
shuffleDeck();

export const dealCard = () => {
    return solitaireDeck.pop();
}

export const resetDeck = () => {
    solitaireDeck = deck.slice();
}