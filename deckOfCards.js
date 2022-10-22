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
      "King", "Ace"];
    const deck = [];
    suits.forEach(s => {
      ranks.forEach(r => {
        let card = {};
        card.suit = s;
        card.rank = r;
        deck.push(card);
      });
    });
    this.deck = deck;
  }

  //Fisher-Yates (aka Knuth) Shuffle
  static _shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  shuffleDeck() {
    Deck._shuffleArray(this.deck);
    console.log("Deck shuffled!");
  }


  dealACard() {
    let { suit, rank } = this.deck.pop();
    console.log(suit, rank);
    return new Card(suit, rank);
  }


}

class Card {
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

}

class Hand {
  constructor() {
    this.cards = [];
  }

  takeACard(card) {
    this.cards.push(card);
  }

  scoreHand() {
    let score = 0;
    //coudl be cool to use enum in TypeScript instead of switch cases here
    this.cards.forEach(card => {
      switch (card.rank) {
        case "Jack":
          score += 11;
          break;
        case "Queen":
          score += 12;
          break;
        case "King":
          score += 13;
          break;
        case "Ace":
          score <= 10 ? score += 11 : score += 1;
          break;
        default: score += Number(card.rank);
        }
    });
    return score;
  }
}

