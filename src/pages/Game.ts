import Player from './Player';
import CardGame from './CardGame';

class ConQuienGame {
    game: CardGame;
    opponentNameElement: HTMLElement | null;
    opponentHandElement: HTMLElement | null;
    playerNameElement: HTMLElement | null;

    constructor() {
        const numPlayers = 2;
        this.game = new CardGame(numPlayers);
        this.opponentNameElement = document.getElementById('opponent-name');
        this.opponentHandElement = document.getElementById('opponent-hand-div');
        this.playerNameElement = document.getElementById('player-name');
    }

    initializeGame(): void {
        if (this.opponentNameElement) {
            this.opponentNameElement.innerHTML = this.game.players[0].name;
        } else {
            console.warn("Element with ID 'opponent-name' not found.");
        }
        if (this.playerNameElement) {
            this.playerNameElement.innerHTML = this.game.players[1].name;
        } else {
            console.warn("Element with ID 'opponent-name' not found.");
        }
    }

    updateOpponentHand(): void {
        if (this.opponentHandElement) {
            this.game.players[0].hand.forEach(card => {
                let elem = document.createElement("img");
                elem.setAttribute("src", card.image);
                elem.setAttribute("alt", card.rank + ' of ' + card.suit);
                elem.classList.add("card")
                this.opponentHandElement!.appendChild(elem);
            });
        }
    }

    // Add other game-related methods

    // Example method: playCard(card: Card) {}

    // Example method: endTurn() {}
}

const game = new ConQuienGame();
game.initializeGame();
game.updateOpponentHand();

// You can call other game methods as needed.
