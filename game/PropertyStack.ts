import { PropertyCard } from './PropertyCard'; 
import { PropertyWildCard } from './PropertyWildCard';

export class PropertyStack {
  properties: Array<PropertyCard>;
  wildProperties: Array<PropertyWildCard>;
  house: boolean;
  hotel: boolean;
  color: string | null;
  isFull: boolean;
  currentRent: number;

  // Update to be initialized with a card
  constructor() {
    this.properties = [];
    this.wildProperties = [];
    this.house = false;
    this.hotel = false;
    this.color = null;
    this.isFull = false;
    this.currentRent = 0;
  }

  addHouseHotel() {

  }

  addCard() {

  }

  updateStack() {
    
  }
}

/*
class PropertySet:
    properties: t.List[PropertyCard]
    wild_properties: t.List[PropertyWildCard]
    house: bool = False
    hotel: bool = False
    color: str = None
    is_full: bool = False
    current_rent: int = 0

    def add_house_hotel(self, card):
        if not self.is_full:
            print('Houses and hotels can only be played on full property sets')
            return False
        elif card.action == 'house':
            if self.house:
                print('A house has already been played on this property set')
                return False
            else:
                self.house = True
                self.update_set()
                return True
        elif card.action == 'hotel':
            if self.house and not self.hotel:
                self.hotel = True
                self.update_set()
                return True
            elif self.hotel:
                print('A hotel has already been played on this property set')
                return False
            else:
                print('You must play a house on this property set before playing a hotel')
                return False

    def add_card(self, card):
        # scenario A: property set is full
        if self.is_full:
            print('The stack is full, please select another or create a new stack')
            return False
        # scenario B: property set has no prop card, no wild card
        elif len(self.properties) == 0 and len(self.wild_properties) == 0:
            if isinstance(card, PropertyWildCard):
                selected_color = ''
                while selected_color not in card.color:
                    selected_color = input('Which color would you like to play this card as?').lower()
                self.wild_properties.append(card)
                self.update_set(selected_color)
                return True
            else:
                self.properties.append(card)
                self.color = card.color
                return True
        # scenario C: property set has prop card
        elif len(self.properties) > 0:
            if isinstance(card, PropertyWildCard):
                if self.color in card.color:
                    self.wild_properties.append(card)
                    self.update_set()
                    return True
                else:
                    print('That card cannot be played on this property set')
                    return False
            else:  # PropertyCard
                if self.color == card.color:
                    self.properties.append(card)
                    self.update_set()
                    return True
                else:
                    print('That card cannot be played on this property set')
                    return False
        # scenario D: property set has wild card and no prop card
        elif len(self.wild_properties) > 0 and len(self.properties) == 0:
            if isinstance(card, PropertyCard):
                if card.color in self.wild_properties[0].color:
                    self.properties.append(card)
                    self.update_set(card.color)
                    return True
                else:
                    print('That card cannot be played on this property set')
                    return False
            else:  # PropertyWildCard
                if self.wild_properties[0].color[0] in card.color and self.wild_properties[0].color[1] in card.color:
                    self.wild_properties.append(card)
                    self.update_set()
                    return True
                else:
                    print('That card cannot be played on this property set')
                    return False

    def update_set(self, color=None):
        color_rents = {
            'brown': [1, 2],
            'light blue': [1, 2, 3],
            'utility': [1, 2],
            'pink': [1, 2, 4],
            'orange': [1, 3, 5],
            'railroad': [1, 2, 3, 4],
            'yellow': [2, 4, 6],
            'red': [2, 3, 6],
            'green': [2, 4, 7],
            'dark blue': [3, 8]
        }
        if color:
            self.color = color
        set_size = len(self.properties) + len(self.wild_properties)
        self.is_full = set_size == len(color_rents[self.color])
        self.current_rent = color_rents[self.color][set_size - 1] + 3 * self.house + 1 * self.hotel
*/