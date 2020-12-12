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
      {stacks.length === 0 ? <AddPropertyStack /> : stacks.map(stack => {
        return <CardStack stack={stack} />
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})

export default PropertyRow;