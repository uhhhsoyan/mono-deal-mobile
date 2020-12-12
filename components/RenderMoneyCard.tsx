import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MoneyCard } from '../game/MoneyCard'; 

type Props = {
  card: MoneyCard
}

const RenderMoneyCard: FC<Props> = ({ card }) => {
  
  return (
    <View style={styles.container}>
      <View style={[styles.valueContainer, { left: '4%', top: '4%'} ]}>
        <Text style={styles.valueText}>{card.value}</Text>
        <Text style={styles.valueTextSmall}>M</Text>
      </View>
      <View style={styles.centerValueContainer}>
        <Text style={styles.centerValueText}>{card.value}</Text>
        <Text style={styles.centerValueTextSmall}>M</Text>
      </View>
      <View style={[styles.valueContainer, { right: '4%', bottom: '4%'} ]}>
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
    justifyContent: 'center',
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#f1e6b3'
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
    paddingTop: '12%',
  },
  centerValueContainer: {
    height: '50%',
    width: undefined,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 100,
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'center',
    paddingTop: '12%',
  },
  valueText: {
    fontSize: 10,
    fontWeight: '600',
  },
  valueTextSmall: {
    fontSize: 6,
  },
  centerValueText: {
    fontSize: 32,
    fontWeight: '600',
  },
  centerValueTextSmall: {
    fontSize: 20,
  },
  actionContainer: {
    height: '50%',
    width: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  rentTextContainer: {
    height: '70%',
    width: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    position: 'absolute',
  },
  rentText: {
    textTransform: 'uppercase',
    fontSize: 12,
    textAlign: 'center', 
  },
})

export default RenderMoneyCard;