
export const blackJackDeck = []

for (let i = 2; i < 11; i++) {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        blackJackDeck.push((
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
        blackJackDeck.push(obj);
    })
})



blackJackDeck.push((
    {
        rank: 'A',
        suit: '♥',
        value: 11
    }
))
blackJackDeck.push((
    {
        rank: 'A',
        suit: '♦',
        value: 11
    }
))
blackJackDeck.push((
    {
        rank: 'A',
        suit: '♠',
        value: 11
    }
))
blackJackDeck.push((
    {
        rank: 'A',
        suit: '♣',
        value: 11
    }
))

export const shuffleDeck = (deck) => {
    let newDeck = [];
    for (let i = 0; i < 52; i++) {
        newDeck.push(deck.splice(Math.floor(Math.random() * (deck.length - i)), 1)[0])
    }
    return newDeck;
}

export const dealCard = (deck) => {
    return deck.shift();
}