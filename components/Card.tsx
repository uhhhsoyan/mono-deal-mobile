import React, { FC, useEffect, useRef } from 'react';
import { View, TouchableOpacity, Text, Animated, StyleSheet } from 'react-native';
import { PropertyCard } from '../game/PropertyCard'; 
import { PropertyWildCard } from '../game/PropertyWildCard';
import { ActionCard } from '../game/ActionCard'; 
import { RentCard } from '../game/RentCard'; 
import { MoneyCard } from '../game/MoneyCard';
import RenderPropertyCard from './RenderPropertyCard';
import RenderPropertyWildCard from './RenderPropertyWildCard';
import RenderPropertyWildCardAll from './RenderPropertyWildCardAll';
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
      if (card.color.length === 2) {
        return <RenderPropertyWildCard card={card}/>
      } else {
        return <RenderPropertyWildCardAll card={card}/>
      }
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
    //height: 200,
    //width: 150,
    height: '99%',
    width: undefined,
    aspectRatio: .75,
    //borderWidth: .5,
    //borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
    shadowColor: '#000',
    shadowOpacity: .5,
    shadowOffset: { width: 0, height: 0 }
  }
})

export default Card;