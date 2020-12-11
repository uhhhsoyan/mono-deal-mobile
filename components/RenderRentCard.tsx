import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RentCard } from '../game/RentCard'; 

type Props = {
  card: RentCard
}
/*
<View style={styles.rentTextContainer}>
  <Text style={styles.rentText}>{card.colors.length <= 2 ? 'rent' : 'rent wild' }</Text>
</View>
*/

// replace with enum? move to styles / types file...
const colorPicker: { [key: string]: string; } = {
  'brown': '#7a3d00',
  'light_blue': '#abf1ff',
  'dark_blue': '#1b77e0',
  'orange': '#ff9900',
  'pink': '#ff59e6',
  'yellow': '#fffb00',
  'red': '#ff0000',
  'green': '#17ad00',
  'utility': '#d8f2ae',
  'railroad': '#000',
}

/*
const colors = [
  'brown',
  'light_blue',
  'dark_blue',
  'orange',
  'pink',
  'yellow',
  'red',
  'green',
  'utility',
  'railroad',
]
*/


const RenderRentCard: FC<Props> = ({ card }) => {

  const renderColors = (colors: string[]) => {
    return (
      colors.length === 2 ? (
        <>
          <View style={[styles.rentColorContainer, { borderLeftColor: colorPicker[card.colors[0]], borderTopColor: colorPicker[card.colors[0]], transform: [{ rotateZ: '45deg' }] }]}></View>
          <View style={[styles.rentColorContainer, { borderLeftColor: colorPicker[card.colors[1]], borderTopColor: colorPicker[card.colors[1]], transform: [{ rotateZ: '-135deg' }] }]}></View>
        </>
      ) : (
        <>
          {colors.map((color, idx) => {
            return <View style={[styles.rentColorContainer, { borderLeftColor: colorPicker[color], transform: [{ rotateZ: `${36*idx}deg` }] }]}></View>
          })}
  
        </>
      )
    )
  }

  return (
    <View style={styles.container}>
      <View style={[styles.valueContainer, { left: '4%', top: '4%'} ]}>
        <Text style={styles.valueText}>{card.value}</Text>
        <Text style={styles.valueTextSmall}>M</Text>
      </View>
      <View style={styles.actionContainer}>
        {renderColors(card.colors)}
        <View style={styles.rentTextContainer}>
          <Text style={styles.rentText}>{card.colors.length <= 2 ? 'rent' : 'rent wild' }</Text>
        </View>
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
    overflow: 'hidden',
    position: 'absolute',
    zIndex: 100,
  },
  rentText: {
    textTransform: 'uppercase',
    fontSize: 12,
    textAlign: 'center', 
  },
  rentColorContainer: {
    width: 0,
    height: 0,
    borderColor: 'transparent',
    borderTopWidth: 50,
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 50, 
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: 'absolute'
  },

})

export default RenderRentCard;