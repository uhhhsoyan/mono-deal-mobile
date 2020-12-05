import React, { FC, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { PropertyCard } from '../game/PropertyCard'; 
import { PropertyWildCard } from '../game/PropertyWildCard';
import { ActionCard } from '../game/ActionCard'; 
import { RentCard } from '../game/RentCard'; 
import { MoneyCard } from '../game/MoneyCard';
import RenderPropertyCard from './RenderPropertyCard';
import RenderPropertyWildCard from './RenderPropertyWildCard';
import RenderActionCard from './RenderActionCard';
import RenderMoneyCard from './RenderMoneyCard';
import RenderRentCard from './RenderRentCard';

type Props = {
  card: PropertyCard | PropertyWildCard | ActionCard | RentCard | MoneyCard
}

const Card: FC<Props> = ({ card }) => {
  const renderCard = () => {
    if (card instanceof PropertyCard) {
      return <RenderPropertyCard card={card}/>;
    }
    if (card instanceof PropertyWildCard) {
      return <RenderPropertyWildCard card={card}/>;
    } 
    if (card instanceof ActionCard) {
      return <RenderActionCard card={card}/>;
    } 
    if (card instanceof RentCard) {
      return <RenderRentCard card={card}/>;
    }
    if (card instanceof MoneyCard) {
      return <RenderMoneyCard card={card}/>;
    }
  }


  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        {renderCard()}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 70,
    borderWidth: .5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
  }
})

export default Card;