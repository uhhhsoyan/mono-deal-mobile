import { Player } from './Player';
import { Deck } from './Deck';
import { PropertyStack } from './PropertyStack';
import { PropertyCard } from './PropertyCard'; 
import { PropertyWildCard } from './PropertyWildCard';
import { ActionCard } from './ActionCard'; 
import { RentCard } from './RentCard'; 
import { MoneyCard } from './MoneyCard';

export class Game {
  deck: Deck;
  discard: Array<PropertyCard | PropertyWildCard | ActionCard | RentCard | MoneyCard>;
  players: Array<Player>;
  playerActive: Player;
  playsLeft: number;

  constructor(playerOneName: string, playerTwoName: string) {
    this.deck = new Deck();
    this.discard = [];
    this.players = [
      new Player(playerOneName),
      new Player(playerTwoName)
    ];
    this.playerActive = this.players[0];
    this.playsLeft = 0;
    this.deck.shuffle();
    this.deck.dealCards(this.players);
  }

  printBoard(): void {
    this.players.forEach(player => {
      console.log('Player: ' + player.name);
      console.log('Hand:');
      player.hand.forEach((card, idx) => {
        console.log(`${idx}: ${card}`)
      })
      console.log('Properties:');
      player.properties.forEach((card, idx) => {
        console.log(`${idx}: ${card}`)
      })
      console.log('Bank:');
      player.properties.forEach((card, idx) => {
        console.log(`${idx}: ${card}`)
      })
      console.log('-------------------')
    })
    console.log(`Discard: ${this.discard}`)
  }

  checkWinner(): boolean {
    this.players.forEach(player => {
      let fullSets: number = 0;
      player.properties.forEach(stack => {
        if (stack.isFull) {
          fullSets += 1;
        }
      })
      if (fullSets >= 3) {
        console.log(`${player.name} is the winner!`)
        return true;
      }
    })
    return false;
  }

  takeTurn(): void {
    this.playsLeft = 3;
    if (this.playerActive.hand.length === 0) {
      this.deck.drawFive(this.playerActive)
    } else {
      this.deck.drawTwo(this.playerActive)
    }
    while (this.playsLeft > 0) {
      this.printBoard();

      // GET MOVE FROM PLAYER

      this.playsLeft -= 1;
    }
    this.endTurn()
  }

  endTurn() {

  }


}