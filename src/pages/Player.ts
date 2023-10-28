class Player {
    name: string;
    hand: Card[] = [];
    revealedHand: { type: string; cards: { rank: string; suit: string }[] }[] = [];
  
    constructor(name: string) {
      this.name = name;
    }
  
    cardRankValue(card: { rank: string; suit: string }): number | null {
      const ranks = ['Ace', '2', '3', '4', '5', '6', '7', 'Jack', 'Queen', 'King'];
      if (card.rank && ranks.includes(card.rank)) {
        return ranks.indexOf(card.rank);
      }
      return null;
    }
  }
  
  export default Player;

  interface Card {
    rank: string;
    suit: string;
    image: string;
  }