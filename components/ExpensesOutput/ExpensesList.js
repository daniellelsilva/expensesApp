import React from 'react'
import { FlatList, View } from 'react-native';

function renderExpensesItem(itemData) {
  return (
    <View>
      <Text>{itemData.item.description}</Text>
    </View>
  )
}

export default function ExpensesList({expenses}) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
    />
  )
}
