
export const blackJackDeck = []

for (let i = 2; i < 11; i++) {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        blackJackDeck.push((
            {
                rank: i,
                suit: suit,
                value: i
            }
        ))
    })
}

['J', 'Q', 'K'].forEach(rank => {
    ['♥', '♦', '♠', '♣'].forEach(suit => {
        blackJackDeck.push((
            {
                rank: rank,
                suit: suit,
                value: 10
            }
        ))
    })
})

['♥', '♦', '♠', '♣'].forEach(suit => {
    blackJackDeck.push((
        {
            rank: 'A',
            suit: suit,
            value: 11
        }
    ))
})

export const shuffleDeck = (deck) => {
    let newDeck = []
    for (let i = 0; i < 52; i++) {
        newDeck.push(deck.splice(Math.floor(Math.random() * (this.deck.length - i)), 1)[0])
    }
    deck = newDeck;
}

export const dealCard = (deck) => {
    deck.shift();
}

