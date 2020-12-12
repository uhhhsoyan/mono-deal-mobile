import { PropertyCard } from './PropertyCard'; 
import { PropertyWildCard } from './PropertyWildCard';
import { ActionCard } from './ActionCard'; 
import { RentCard } from './RentCard'; 
import { MoneyCard } from './MoneyCard';
import { Player } from './Player';

export class Deck {
  deck: Array<PropertyCard | PropertyWildCard | ActionCard | RentCard | MoneyCard>;

  constructor() {
    this.deck = [
      new PropertyCard(1, 'Mediterranean Ave', 'brown', 2, [1, 2]),
      new PropertyCard(1, 'Mediterranean Ave', 'brown', 2, [1, 2]),
      new PropertyCard(1, 'Baltic Ave', 'brown', 2, [1, 2]),
      new PropertyCard(1, 'Connecticut Ave', 'light_blue', 2, [1, 2, 3]),
      new PropertyCard(1, 'Vermont Ave', 'light_blue', 2, [1, 2, 3]),
      new PropertyCard(1, 'Oriental Ave', 'light_blue', 2, [1, 2, 3]),
      new PropertyCard(2, 'Water Works', 'utility', 2, [1, 2]),
      new PropertyCard(2, 'Electric Company', 'utility', 2, [1, 2]),
      new PropertyCard(2, 'Virginia Ave', 'pink', 3, [1, 2, 4]),
      new PropertyCard(2, 'St Charles Place', 'pink', 3, [1, 2, 4]),
      new PropertyCard(2, 'States Avenue', 'pink', 3, [1, 2, 4]),
      new PropertyCard(2, 'Tennessee Avenue', 'orange', 3, [1, 3, 5]),
      new PropertyCard(2, 'New York Avenue', 'orange', 3, [1, 3, 5]),
      new PropertyCard(2, 'St James Place', 'orange', 3, [1, 3, 5]),
      new PropertyCard(2, 'B & O Railroad', 'railroad', 4, [1, 2, 3, 4]),
      new PropertyCard(2, 'Short Line', 'railroad', 4, [1, 2, 3, 4]),
      new PropertyCard(2, 'Pennsylvania Railroad', 'railroad', 4, [1, 2, 3, 4]),
      new PropertyCard(2, 'Reading Railroad', 'railroad', 4, [1, 2, 3, 4]),
      new PropertyCard(3, 'Atlantic Avenue', 'yellow', 3, [2, 4, 6]),
      new PropertyCard(3, 'Marvin Gardens', 'yellow', 3, [2, 4, 6]),
      new PropertyCard(3, 'Ventnor Avenue', 'yellow', 3, [2, 4, 6]),
      new PropertyCard(3, 'Illinois Avenue', 'red', 3, [2, 3, 6]),
      new PropertyCard(3, 'Indiana Avenue', 'red', 3, [2, 3, 6]),
      new PropertyCard(3, 'Kentucky Avenue', 'red', 3, [2, 3, 6]),
      new PropertyCard(4, 'Pennsylvania Avenue', 'green', 3, [2, 4, 7]),
      new PropertyCard(4, 'North Carolina Avenue', 'green', 3, [2, 4, 7]),
      new PropertyCard(4, 'Pacific Avenue', 'green', 3, [2, 4, 7]),
      new PropertyCard(4, 'Park Place', 'dark_blue', 2, [3, 8]),
      new PropertyCard(4, 'Boardwalk', 'dark_blue', 2, [3, 8]),
      new PropertyWildCard(1, ['light_blue', 'brown']),
      new PropertyWildCard(2, ['pink', 'orange']),
      new PropertyWildCard(2, ['pink', 'orange']),
      new PropertyWildCard(2, ['railroad', 'utility']),
      new PropertyWildCard(3, ['red', 'yellow']),
      new PropertyWildCard(3, ['red', 'yellow']),
      new PropertyWildCard(4, ['railroad', 'light_blue']),
      new PropertyWildCard(4, ['railroad', 'green']),
      new PropertyWildCard(4, ['green', 'dark_blue']),
      new PropertyWildCard(0, ['brown', 'light_blue', 'pink', 'orange', 'red', 'yellow', 'green', 'dark_blue', 'railroad', 'utility']),
      new PropertyWildCard(0, ['brown', 'light_blue', 'pink', 'orange', 'red', 'yellow', 'green', 'dark_blue', 'railroad', 'utility']),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'pass go'),
      new ActionCard(1, 'double rent'),
      new ActionCard(1, 'double rent'),
      new ActionCard(2, 'birthday'),
      new ActionCard(2, 'birthday'),
      new ActionCard(3, 'sly deal'),
      new ActionCard(3, 'sly deal'),
      new ActionCard(3, 'sly deal'),
      new ActionCard(3, 'forced deal'),
      new ActionCard(3, 'forced deal'),
      new ActionCard(3, 'forced deal'),
      new ActionCard(3, 'debt collector'),
      new ActionCard(3, 'debt collector'),
      new ActionCard(3, 'debt collector'),
      new ActionCard(3, 'house'),
      new ActionCard(3, 'house'),
      new ActionCard(3, 'house'),
      new ActionCard(4, 'hotel'),
      new ActionCard(4, 'hotel'),
      new ActionCard(4, 'just say no'),
      new ActionCard(4, 'just say no'),
      new ActionCard(4, 'just say no'),
      new ActionCard(5, 'deal breaker'),
      new ActionCard(5, 'deal breaker'),
      new RentCard(1, ['light_blue', 'brown']),
      new RentCard(1, ['light_blue', 'brown']),
      new RentCard(1, ['pink', 'orange']),
      new RentCard(1, ['pink', 'orange']),
      new RentCard(1, ['red', 'yellow']),
      new RentCard(1, ['red', 'yellow']),
      new RentCard(1, ['dark_blue', 'green']),
      new RentCard(1, ['dark_blue', 'green']),
      new RentCard(1, ['railroad', 'utility']),
      new RentCard(1, ['railroad', 'utility']),
      new RentCard(3, ['brown', 'light_blue', 'pink', 'orange', 'red', 'yellow', 'green', 'dark_blue', 'railroad', 'utility']),
      new RentCard(3, ['brown', 'light_blue', 'pink', 'orange', 'red', 'yellow', 'green', 'dark_blue', 'railroad', 'utility']),
      new RentCard(3, ['brown', 'light_blue', 'pink', 'orange', 'red', 'yellow', 'green', 'dark_blue', 'railroad', 'utility']),
      new MoneyCard(1),
      new MoneyCard(1),
      new MoneyCard(1),
      new MoneyCard(1),
      new MoneyCard(1),
      new MoneyCard(1),
      new MoneyCard(2),
      new MoneyCard(2),
      new MoneyCard(2),
      new MoneyCard(2),
      new MoneyCard(2),
      new MoneyCard(3),
      new MoneyCard(3),
      new MoneyCard(3),
      new MoneyCard(4),
      new MoneyCard(4),
      new MoneyCard(4),
      new MoneyCard(5),
      new MoneyCard(5),
      new MoneyCard(10)
    ]
  }

  shuffle(): void {
    let m = this.deck.length;
    let t;
    let i;
  
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.deck[m];
      this.deck[m] = this.deck[i];
      this.deck[i] = t;
    }

  }

  // Consolidate below methods to single method called with card count

  drawTwo(player: Player): void {
    for (let i = 0; i < 2; i++) {
      let temp = this.deck.pop();
      temp ? player.hand.push(temp) : null;
    }
  }

  drawFive(player: Player): void {
    for (let i = 0; i < 5; i++) {
      let temp = this.deck.pop();
      temp ? player.hand.push(temp) : null;
    }
  }

  dealCards(players: Player[]): void {
    players.forEach(player => {
      this.drawFive(player)
    })
  }

}