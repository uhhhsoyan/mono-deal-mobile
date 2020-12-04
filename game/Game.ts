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


}