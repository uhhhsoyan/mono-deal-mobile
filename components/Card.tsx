import React, { FC, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {

}

const Card: FC<Props> = () => {
  
  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}></View>
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