import * as React from 'react';
import { StyleSheet } from 'react-native';

import { PropertyCard } from '../game/PropertyCard';
import { ActionCard } from '../game/ActionCard';
import { RentCard } from '../game/RentCard';
import { MoneyCard } from '../game/MoneyCard';
import { PropertyWildCard } from '../game/PropertyWildCard';

import { AppContext } from '../context/context';
import CardRow from '../components/CardRow';
import Card from '../components/Card';
import { Text, View } from '../components/Themed';

const GameScreen = () => {
  const { state, dispatch } = React.useContext(AppContext);

  const testCards = [
    new PropertyCard(1, 'Mediterranean Ave', 'brown', 2, [1, 2]),
    new ActionCard(5, 'deal breaker'),
    new RentCard(1, ['light_blue', 'brown']),
    new RentCard(3, ['light_blue', 'brown', 'pink', 'orange', 'railroad', 'utility', 'red', 'yellow', 'green', 'dark_blue']),
    new MoneyCard(1),
    new PropertyWildCard(4, ['green', 'dark_blue']),
    new PropertyWildCard(0, ['light_blue', 'brown', 'pink', 'orange', 'railroad', 'utility', 'red', 'yellow', 'green', 'dark_blue']),

  ]

  //<CardRow cards={state.game.playerActive.hand}/>

  return (
    <View style={styles.container}>
      <View style={styles.propContainer}>
        <Text>{state.game.playerActive.hand[0].value}</Text>
      </View>
      <View style={styles.handContainer}>
      <CardRow cards={testCards}/>
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
  propContainer: {
   
    height: '10%',
    width: '100%',

    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    backgroundColor: 'transparent',
    marginBottom: 10,
  },
  bankContainer: {

  }
});

export default GameScreen;
