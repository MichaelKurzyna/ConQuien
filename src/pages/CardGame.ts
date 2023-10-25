import Player from './player';
class CardGame {
    numPlayers: number;
    players: Player[] = [];
    deck: { rank: string; suit: string }[] = [];
    discardPile: { rank: string; suit: string }[] = [];
  
    constructor(numPlayers: number) {
      this.numPlayers = numPlayers;
      this.initializeGame();
    }
  
    initializeGame(): void {
      // Define a standard deck of cards
      const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
      const ranks = ['Ace', '2', '3', '4', '5', '6', '7', 'Jack', 'Queen', 'King'];
  
      this.deck = suits.flatMap((suit) => ranks.map((rank) => ({ rank, suit })));
  
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
  }
  export default CardGame;