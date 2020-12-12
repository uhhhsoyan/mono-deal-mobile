import React, { FC } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card as CardClass } from '../game/Card';

type Props = {
  cards: CardClass[]
}

const CardStack: FC<Props> = ({ cards }) => {
  
  const renderCards = (cards: CardClass[]) => {
    return cards.map((card, idx) => {

    })
  }

  return (
    <>
      {cards.length === 0 ? <View style={styles.emptyContainer}></View> : renderCards(cards)}
    </>
  )
}

const styles = StyleSheet.create({
  emptyContainer: {
    height: '99%',
    width: undefined,
    aspectRatio: .75,
    borderRadius: 5,
    backgroundColor: '#ebebeb',
    marginLeft: 2,
    marginRight: 2,
  }
})

export default CardStack;