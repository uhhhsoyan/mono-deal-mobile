import { PropertyStack } from './PropertyStack';
import { PropertyCard } from './PropertyCard'; 
import { PropertyWildCard } from './PropertyWildCard';
import { ActionCard } from './ActionCard'; 
import { RentCard } from './RentCard'; 
import { MoneyCard } from './MoneyCard';

export class Player {
  name: string;
  hand: Array<PropertyCard | PropertyWildCard | ActionCard | RentCard | MoneyCard>;
  bank: Array<ActionCard | RentCard | MoneyCard>;
  properties: Array<PropertyStack>;

  constructor(name: string) {
    this.name = name;
    this.hand = [];
    this.bank = [];
    this.properties = [];
  }

  payUp() {

  }


}

/*
class Player:
    name: str
    hand: t.List[Card]  # list of Card objects
    bank: t.List[Card]  # list of MoneyCard objects or banked ActionCards
    properties: t.List[PropertySet]  # list of Stacks of PropertyCard objects

    def pay_up(self, amount_owed):
        cards_paid = []
        while amount_owed > 0:
            if len(self.bank) == 0 and len(self.properties) == 0:
                print('Sorry! ' + self.name + ' has nothing to pay with!')
                amount_owed = 0
            else:
                pay_method = input(self.name + ', you owe ' + str(amount_owed) + '. Would you like to pay from bank or '
                                                                            'properties? Enter \'b\' for bank or '
                                                                            '\'p\' for properties: ').lower()
                if pay_method == 'b':
                    if len(self.bank) == 0:
                        print('Your bank is empty, please select a property card')
                        continue
                    card_index = int(input('Which card from your bank? Enter the index: '))
                    card_selected = self.bank[int(card_index)]
                    cards_paid.append(card_selected)
                    del self.bank[card_index]
                    amount_owed -= card_selected.value
                elif pay_method == 'p':
                    set_idx = int(input('Which set? Enter the index'))
                    prop_or_wild = input('Prop card or wild card? Enter \'p\' or \'w\': ').lower()
                    prop_idx = int(input('Enter the index in the corresponding list: '))
                    if prop_or_wild == 'p':
                        card_selected = self.properties[set_idx].properties[prop_idx]
                        cards_paid.append(card_selected)
                        del self.properties[set_idx].properties[prop_idx]
                        amount_owed -= card_selected.value
                    else:
                        card_selected = self.properties[set_idx].wild_properties[prop_idx]
                        cards_paid.append(card_selected)
                        del self.properties[set_idx].wild_properties[prop_idx]
                        amount_owed -= card_selected.value
        return cards_paid

*/