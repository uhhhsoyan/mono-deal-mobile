import React, { FC } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { PropertyStack } from '../game/PropertyStack';
import AddPropertyStack from './AddPropertyStack';
import CardStack from './CardStack';

type Props = {
  stacks: PropertyStack[]
}

const PropertyRow: FC<Props> = ({ stacks }) => {
  
  return (
    <ScrollView horizontal>
      {stacks.map(stack => {
        return <CardStack stack={stack} />
      })}
      <AddPropertyStack />
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})

export default PropertyRow;