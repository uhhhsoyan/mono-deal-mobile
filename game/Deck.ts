import { PropertyCard } from './PropertyCard'; 
import { PropertyWildCard } from './PropertyWildCard';
import { ActionCard } from './ActionCard'; 
import { RentCard } from './RentCard'; 
import { MoneyCard } from './MoneyCard';

export class Deck {
  deck: Array<PropertyCard | PropertyWildCard | ActionCard | RentCard | MoneyCard>;

  constructor() {
    this.deck = [
      new PropertyCard(1, 'Mediterranean Ave', 'brown', 2, [1, 2]),
      new PropertyCard(1, 'Mediterranean Ave', 'brown', 2, [1, 2]),
      new PropertyCard(1, 'Baltic Ave', 'brown', 2, [1, 2]),
      new PropertyCard(1, 'Connecticut Ave', 'light blue', 2, [1, 2, 3]),
      new PropertyCard(1, 'Vermont Ave', 'light blue', 2, [1, 2, 3]),
      new PropertyCard(1, 'Oriental Ave', 'light blue', 2, [1, 2, 3]),
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
      new PropertyCard(4, 'Park Place', 'dark blue', 2, [3, 8]),
      new PropertyCard(4, 'Boardwalk', 'dark blue', 2, [3, 8]),
      new PropertyWildCard(1, ['light blue', 'brown']),
      new PropertyWildCard(2, ['pink', 'orange']),
      new PropertyWildCard(2, ['pink', 'orange']),
      new PropertyWildCard(2, ['railroad', 'utility']),
      new PropertyWildCard(3, ['red', 'yellow']),
      new PropertyWildCard(3, ['red', 'yellow']),
      new PropertyWildCard(4, ['railroad', 'light blue']),
      new PropertyWildCard(4, ['railroad', 'green']),
      new PropertyWildCard(4, ['green', 'dark blue']),
      new PropertyWildCard(0, ['light blue', 'brown', 'pink', 'orange', 'railroad', 'utility', 'red', 'yellow', 'green', 'dark blue']),
      new PropertyWildCard(0, ['light blue', 'brown', 'pink', 'orange', 'railroad', 'utility', 'red', 'yellow', 'green', 'dark blue']),
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
      new RentCard(1, ['light blue', 'brown']),
      new RentCard(1, ['light blue', 'brown']),
      new RentCard(1, ['pink', 'orange']),
      new RentCard(1, ['pink', 'orange']),
      new RentCard(1, ['red', 'yellow']),
      new RentCard(1, ['red', 'yellow']),
      new RentCard(1, ['dark blue', 'green']),
      new RentCard(1, ['dark blue', 'green']),
      new RentCard(1, ['railroad', 'utility']),
      new RentCard(1, ['railroad', 'utility']),
      new RentCard(3, ['light blue', 'brown', 'pink', 'orange', 'railroad', 'utility', 'red', 'yellow', 'green', 'dark blue']),
      new RentCard(3, ['light blue', 'brown', 'pink', 'orange', 'railroad', 'utility', 'red', 'yellow', 'green', 'dark blue']),
      new RentCard(3, ['light blue', 'brown', 'pink', 'orange', 'railroad', 'utility', 'red', 'yellow', 'green', 'dark blue']),
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

  shuffle() {
    
  }

  dealCards() {

  }

  drawTwo(): void {
    this.deck.pop();
  }

  drawFive() {

  }

}

        
/*
// Fisher yates shuffle method
shuffle() {
  for i in range(len(self.deck) - 1, 0, -1):
      j = random.randint(0, i + 1)
      self.deck[i], self.deck[j] = self.deck[j], self.deck[i]
  return self.deck
}

def deal_cards(self, players):
    for i in range(5):
        for player in players:
            temp = self.deck.pop()
            player.hand.append(temp)

def draw(self, player):
    for i in range(2):
        temp = self.deck.pop()
        player.hand.append(temp)

def draw_five(self, player):
    for i in range(5):
        temp = self.deck.pop()
        player.hand.append(temp)

*/