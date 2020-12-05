import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropertyWildCard } from '../game/PropertyWildCard'; 

type Props = {
  card: PropertyWildCard
}

const RenderPropertyWildCard: FC<Props> = ({ card }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: card.color[0] }]}></View>
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

export default RenderPropertyWildCard;