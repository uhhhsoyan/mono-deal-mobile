import React, { FC } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddPropertyStack: FC = ({ }) => {

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <Text>
          Add property stack
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '99%',
    width: undefined,
    aspectRatio: .75,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#dbdbdb',
    backgroundColor: 'white',
    marginLeft: 2,
    marginRight: 2,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default AddPropertyStack;