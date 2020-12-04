import * as React from 'react';
import { StyleSheet } from 'react-native';

import { AppContext } from '../context/context';
import CardRow from '../components/CardRow';
import CardStack from '../components/CardStack';
import { Text, View } from '../components/Themed';

const GameScreen = () => {
  const { state, dispatch } = React.useContext(AppContext);
  return (
    <View style={styles.container}>
      <View style={styles.handContainer}>
        <CardRow cards={state.game.playerActive.hand}/>
      </View>
      <View style={styles.propContainer}>
        <Text>{state.game.playerActive.hand[0].value}</Text>
      </View>
      <View style={styles.bankContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cce9ff'
  },
  handContainer: {
    position: 'absolute',
    height: '10%',
    width: '100%',
    bottom: '3%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent',
  },
  propContainer: {
    position: 'absolute',
    height: '10%',
    width: '100%',
    bottom: '15%',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'transparent'
  },
  bankContainer: {

  }
});

export default GameScreen;
