import React, { FC } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Card as CardClass } from '../game/Card';
import Card from './Card';

type Props = {
  cards: CardClass[]
}

const CardStack: FC<Props> = ({ cards }) => {
  
  const renderCards = () => {

  }

  return (
    <View>

    </View>
  )
}

const styles = StyleSheet.create({

})

export default CardStack;