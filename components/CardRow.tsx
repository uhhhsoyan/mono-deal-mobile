import React, { FC } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card as CardClass } from '../game/Card';
import Card from './Card';

type Props = {
  cards: CardClass[]
}

const CardRow: FC<Props> = ({ cards }) => {
  
  return (
    <ScrollView horizontal>
      {cards.map(card => {
        return <Card card={card} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})

export default CardRow;