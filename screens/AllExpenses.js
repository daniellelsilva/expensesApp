import React from 'react'
import { View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

export default function AllExpenses() {
  return (
    <View>
      <ExpensesOutput expensesPeriod="Total" />
    </View>
  )
}
