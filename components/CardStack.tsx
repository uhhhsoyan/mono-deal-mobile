import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card as CardClass } from '../game/Card';
import { PropertyStack } from '../game/PropertyStack';

type Props = {
  stack: PropertyStack
}

const CardStack: FC<Props> = ({ stack }) => {
  
  const renderCards = (cards: CardClass[]) => {
    return cards.map((card, idx) => {

    })
  }

  return (
    <>
      <View style={styles.emptyContainer}><Text>TESTING</Text></View>
    </>
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    height: '99%',
    width: undefined,
    aspectRatio: .75,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    marginLeft: '3%',
  }
})

export default CardStack;