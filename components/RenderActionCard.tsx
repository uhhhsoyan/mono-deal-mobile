import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ActionCard } from '../game/ActionCard'; 

type Props = {
  card: ActionCard
}

// replace with enum? move to styles / types file...
const colorPicker: { [key: string]: string; } = {
  'pass go': '#f1e6b3',
  'double rent': '#f1e6b3',
  'birthday': '#ebdac6',
  'sly deal': '#c6c9bc',
  'forced deal': '#c6c9bc',
  'debt collector': '#c6c9bc',
  'house': '#ff0000',
  'hotel': '#17ad00',
  'just say no': '#9bb0c9',
  'deal breaker': '#a07eb1',
}

const RenderActionCard: FC<Props> = ({ card }) => {
  return (
    <View style={[styles.container, { backgroundColor: colorPicker[card.action] }]}>
      <View style={[styles.valueContainer, { left: '4%', top: '4%'} ]}>
        <Text style={styles.valueText}>{card.value}</Text>
        <Text style={styles.valueTextSmall}>M</Text>
      </View>
      <View style={styles.actionContainer}>
        <Text style={styles.actionText}>{card.action}</Text>  
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
    overflow: 'hidden'
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
  actionContainer: {
    height: '50%',
    width: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: 'white',
  },
  actionText: {
    textTransform: 'uppercase',
    fontSize: 12,
    textAlign: 'center',
  }

})

export default RenderActionCard;