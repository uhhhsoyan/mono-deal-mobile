import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropertyWildCard } from '../game/PropertyWildCard'; 
import { cardColors } from '../styles/colors';

type Props = {
  card: PropertyWildCard
}

const RenderPropertyWildCardAll: FC<Props> = ({ card }) => {


  const renderColors = (colors: string[]) => {
    return colors.map(color => {
      return <View style={[styles.headerColorSquare, { backgroundColor: cardColors[color]}]}></View>
    })
  }
    
  return (
    <View style={styles.container}>
      <View style={styles.headerColorBar}>{renderColors(card.color)}</View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Property Wild Card</Text>
      </View>
      <View style={styles.headerColorBar}>{renderColors(card.color)}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    paddingTop: '5%',
  },
  header: {
    height: '8%',
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    marginTop: '3%',
    marginBottom: '3%',
  },
  headerColorBar: {
    height: '7%',
    width: '90%',
    flexDirection: 'row',
    borderWidth: 1,
  },
  headerColorSquare: {
    height: '100%',
    width: '10%'
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 7,
    textTransform: 'uppercase',
  },
  rentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '70%',
    marginTop: '5%',
  },
  rentCount: {
    fontSize: 11,
  },
  rentValue: {
    fontSize: 11,
  },
})

export default RenderPropertyWildCardAll;