import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropertyCard } from '../game/PropertyCard'; 

type Props = {
  card: PropertyCard
}

const RenderPropertyCard: FC<Props> = ({ card }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: card.color }]}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  header: {
    height: '20%',
    width: '100%',
    backgroundColor: 'red',
    padding: 10
  },
  valueContainer: {
    position: 'absolute',
  },
  valueText: {

  }

})

export default RenderPropertyCard;