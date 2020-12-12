import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import { PropertyCard } from '../game/PropertyCard';
import { ActionCard } from '../game/ActionCard';
import { RentCard } from '../game/RentCard';
import { MoneyCard } from '../game/MoneyCard';
import { PropertyWildCard } from '../game/PropertyWildCard';

import { AppContext } from '../context/context';
import { CardRow, PropertyRow, MessageBoard, Discard } from '../components';



const GameScreen = () => {
  const { state, dispatch } = React.useContext(AppContext);

  const testCards = [
    new PropertyCard(1, 'Mediterranean Ave', 'brown', 2, [1, 2]),
    new ActionCard(5, 'deal breaker'),
    new RentCard(1, ['light_blue', 'brown']),
    new RentCard(3, ['light_blue', 'brown', 'pink', 'orange', 'railroad', 'utility', 'red', 'yellow', 'green', 'dark_blue']),
    new MoneyCard(1),
    new PropertyWildCard(4, ['green', 'dark_blue']),
    new PropertyWildCard(0, ['brown', 'light_blue', 'pink', 'orange', 'red', 'yellow', 'green', 'dark_blue', 'railroad', 'utility']),
  ]

  return (
    <View style={styles.container}>
      <MessageBoard message='HEY'/>
      <Discard cards={state.game.discard}/>
      <View style={styles.propertiesContainer}>
        <PropertyRow stacks={state.game.playerActive.properties}/>
      </View>
      <View style={styles.handContainer}>
        <CardRow cards={state.game.playerActive.hand}/>
      </View>
      <View style={styles.bankContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  handContainer: {
    height: '15%',
    width: '100%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    backgroundColor: 'transparent',
    marginBottom: 30,
  },
  propertiesContainer: {
    height: '12%',
    width: '100%',
    backgroundColor: 'transparent',
    marginBottom: 10,
    borderColor: 'red',
    borderWidth: 2,
  },
  bankContainer: {

  }
});

export default GameScreen;
