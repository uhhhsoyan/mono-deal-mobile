import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RentCard } from '../game/RentCard'; 

type Props = {
  card: RentCard
}

const RenderRentCard: FC<Props> = ({ card }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
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

export default RenderRentCard;