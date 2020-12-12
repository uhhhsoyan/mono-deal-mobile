import React, { FC, useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';
import { Card as CardClass } from '../game/Card';

type Props = {
  message: string
}

const MessageBoard: FC<Props> = ({ message }) => {

  return (
    <View style={styles.container}>
      <Text>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '15%',
    width: undefined,
    aspectRatio: .75,
    borderRadius: 5,
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
    shadowColor: '#000',
    shadowOpacity: .5,
    shadowOffset: { width: 0, height: 0 }
  }
})

export default MessageBoard;