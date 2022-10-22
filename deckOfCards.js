"use strict";
/** Design the data structures for a generic deck of cards.
 * Explain how you would subclass the data structures to implement blackjack.
 *
 * NOTE: generic can mean many things (standard, uno cards, ...) - ask beforehand.
 */

class Deck {
  constructor() {
  // cards = [{suit: "Hearts", rank: "King"}, {suit: "Spades", rank: 1}, ...]
  const suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
  const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen",
                    "King", "Ace"]
  const deck = [];
  suits.forEach(s => {
    ranks.forEach(r => {
        let card = {};
        card[s] = r;
      deck.push(card);
      })
    })
    this.deck = deck;
}

  //Fisher-Yates (aka Knuth) Shuffle
  static _shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  static shuffleDeck () {
    Deck._shuffleArray(Deck.cards);
  }


  static dealACard() {
    let { suit, rank } = cards.pop();
    return new Card(suit, rank)
  }

}

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }
}



/**
 * blackjack deals card to each player one by one
 * -> need to instantiate a card with a class Card everytime.
 * deck has 52 cards so everytime a card is dealt remove from the deck.
 *
 */

/** non-OOP approach:
 * an array of suits = [diamond, heart, spade, clover]
 * an array of numbers 2 -> 10 and Jack, Queen, King, Ace
 * map through to get an array of 52 cards.
 *  shuffle the deck for blackjack.
 * pop the last card every time
 */