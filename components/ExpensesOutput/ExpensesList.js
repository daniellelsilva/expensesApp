import React from 'react'
import { FlatList, Text, View } from 'react-native';
import ExpensesItem from './ExpensesItem';

function renderExpensesItem(itemData) {
  return (
    <View>
      <ExpensesItem {...itemData.item} />
    </View>
  )
}

export default function ExpensesList({expenses}) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id}
    />
  )
}
