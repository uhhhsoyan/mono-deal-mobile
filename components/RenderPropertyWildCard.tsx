import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropertyWildCard } from '../game/PropertyWildCard'; 
import { colors } from '../styles/colors';

type Props = {
  card: PropertyWildCard
}

// replace with enum? move to styles / types file...
const colorPicker: { [key: string]: string; } = {
  'brown': '#7a3d00',
  'light_blue': '#abf1ff',
  'pink': '#ff59e6',
  'orange': '#ff9900',
  'red': '#ff0000',
  'yellow': '#fffb00',
  'green': '#17ad00',
  'dark_blue': '#1b77e0',
  'railroad': '#000',
  'utility': '#d8f2ae',
}

const RenderPropertyWildCard: FC<Props> = ({ card }) => {

  /*
  const renderColors = ((colors) => {
    return (
      {colors.map(color) => {

      }}
      <View style={styles.headerColors} key={idx}>
        
      </View>
    )
  })
  */

  return (
    <View style={styles.container}>
      <View style={[styles.header]}>
        <Text style={styles.headerText}>Property Wild Card</Text>
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
  valueContainer: {
    position: 'absolute',
    width: '20%',
    height: undefined,
    aspectRatio: 1,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    left: '4%',
    top: '4%',
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