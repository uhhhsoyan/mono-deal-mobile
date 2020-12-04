import React, { FC, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PropertyCard } from '../game/PropertyCard'; 
import { PropertyWildCard } from '../game/PropertyWildCard';
import { ActionCard } from '../game/ActionCard'; 
import { RentCard } from '../game/RentCard'; 
import { MoneyCard } from '../game/MoneyCard';

type Props = {
  card: PropertyCard | PropertyWildCard | ActionCard | RentCard | MoneyCard
}

const Card: FC<Props> = ({ card }) => {
  const renderCard = () => {
    return (
      <View style={styles.container}>
        {(card instanceof PropertyCard) ?
          <Text>Property Card</Text> :
          <Text>Not a property card</Text>
        }
      </View>
    )
  }
  return (
    <TouchableOpacity onPress={() => {}}>
      {renderCard()}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 70,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'white',
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
  }
})

export default Card;