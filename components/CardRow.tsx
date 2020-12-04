import React, { FC } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card as CardClass } from '../game/Card';
import Card from './Card';

type Props = {
  cards: CardClass[]
}

const CardRow: FC<Props> = ({ cards }) => {
  
  return (
    <ScrollView horizontal>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})

export default CardRow;