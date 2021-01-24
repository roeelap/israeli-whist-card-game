// ------- TRUMP SUIT BID ROUND -------- //

// checking which suit is the most frequent
// if 2 suits are equal in frequency, check which
// has the higher cards.

// calculate score based on the cards:

// most frequent suit:
// J -> A : +1
// 6 -> 10 : +0.5
// 2 -> 5 : +0.25

// other suits:
// A : +1
// K : +1
// Q : +0.5
// Rest : +0

// if it's possible to bid the wanted suit,
// with the score - bid the suit with the 
// minimal tricks possible. for example,
// if the suit is hearts, the score is 7,
// and the highest bid at the moment is
// clubs-6, BID HEARTS-6.



// -------- CONTRACT BID ROUND --------- //

// calculate score based on the cards:

// Trump suit:
// J -> A : +1
// 6 -> 10 : +0.5
// 2 -> 5 : +0.25
// if you have 5 or more cards with the trump suit, +1

// other suits:
// A : +1 (if you have 6 or more cards in a certain suit, +0.75) 
// K : +1 (if you have 5 or more cards in a certain suit, +0.5) 
// Q : +0.5 (if you have 5 or more cards in a certain suit, +0) 
// Rest : +0

// if the lowest card in a certain suit is a 5/6 : +0.5
// if the lowest card in a certain suit is a 7 -> ... : +1

// floor the score



// -------- GAME ROUND ------------ //


// keep track of the cards in the game


// OVER:
// 1. if possible, and if you know you probably will win, try to win the hand.
// 2. if you can't win the hand, put the lowest card you have.
// 3. if you can put a trump card over a regular card, do it with your lowest trump card.
// 4. when you put the first card, put the highest card you have that will win.
// 5. when you finish your contract, play like it's under.


// UNDER:
// 1. if you have a lower card to put, put it. put the highest card that will not win.
// 2. if you can't lose the hand, put the highest card you have.
// 3. when you put the first card, put the lowest card you have.
