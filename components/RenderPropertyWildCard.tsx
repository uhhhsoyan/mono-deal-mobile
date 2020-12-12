import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropertyWildCard } from '../game/PropertyWildCard'; 
import { cardColors } from '../styles/colors';

type Props = {
  card: PropertyWildCard
}

const RenderPropertyWildCard: FC<Props> = ({ card }) => {

  const renderRentRow = ((rent: number, idx: number) => {
    return (
      <View style={styles.rentRow} key={idx}>
        <Text style={styles.rentCount}>{`${idx + 1}x`}</Text>
        <Text>. . .</Text>
        <Text style={styles.rentValue}>{`$${rent}`}</Text>
      </View>
    )
  })
  /* {card.rents.map((rent, idx) => renderRentRow(rent, idx))} */
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: cardColors[card.color[0]] }]}>
        <Text style={styles.headerText}>Property Wild Card</Text>
      </View>
      <View style={[styles.valueContainer, { left: '4%', top: '4%' }]}>
        <Text style={styles.valueText}>{card.value}</Text>
        <Text style={styles.valueTextSmall}>M</Text>
      </View>
      <View style={[styles.footer, { backgroundColor: cardColors[card.color[1]] }]}>
        <Text style={styles.headerText}>Property Wild Card</Text>
      </View>
      <View style={[styles.valueContainer, { right: '4%', bottom: '4%', transform: [{ rotateZ: '180deg' }] }]}>
        <Text style={styles.valueText}>{card.value}</Text>
        <Text style={styles.valueTextSmall}>M</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    overflow: 'hidden'
  },
  header: {
    height: '20%',
    width: '80%',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    position: 'absolute',
    height: '20%',
    width: '80%',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ rotateZ: '180deg' }]
  },
  valueContainer: {
    position: 'absolute',
    width: '20%',
    height: undefined,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingTop: '12%'
  },
  valueText: {
    fontSize: 10,
    fontWeight: '600',
  },
  valueTextSmall: {
    fontSize: 6,
  },
  headerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 9,
    marginLeft: 15,
    marginRight: 10,
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

export default RenderPropertyWildCard;