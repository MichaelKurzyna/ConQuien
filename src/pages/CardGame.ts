import Player from './Player';
import { cards } from './Cards';
class CardGame {
    numPlayers: number;
    players: Player[] = [];
    deck: Card[] = [];
    discardPile: Card[] = [];
  
    constructor(numPlayers: number) {
      this.numPlayers = numPlayers;
      this.initializeGame();
    }
  
    initializeGame(): void {
      this.deck = [...cards];
      //Shuffle a couple of times
      for(let i = 0; i < 10; i++){
        this.shuffleDeck()
      }
  
      // Create players
      for (let i = 0; i < this.numPlayers; i++) {
        const playerName = prompt(`Enter the name of player ${i + 1}: `);
        if (playerName) {
          this.players.push(new Player(playerName));
        }
      }
  
      // Deal cards to each player
      for (let i = 0; i < this.numPlayers; i++) {
        for (let j = 0; j < 10; j++) {
          const card = this.deck.pop();
          if (card) {
            this.players[i].hand.push(card);
          }
        }
      }
    }
  
    cardRankValue(card: { rank: string; suit: string }): number | null {
      const ranks = ['Ace', '2', '3', '4', '5', '6', '7', 'Jack', 'Queen', 'King'];
      if (card.rank && ranks.includes(card.rank)) {
        return ranks.indexOf(card.rank);
      }
      return null;
    }

    shuffleDeck(): void {
      for (let i = this.deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
      }
    }
  }
  export default CardGame;

  interface Card {
    rank: string;
    suit: string;
    image: string;
  }