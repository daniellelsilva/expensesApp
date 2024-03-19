import React from 'react'
import { View } from 'react-native'
import ExpensesSummary from './ExpensesSummary'
import ExpensesList from './ExpensesList'

export default function ExpensesOutput({expenses, period}) {
  return (
    <View>
      <ExpensesSummary expenses={expenses} period={period} />
      <ExpensesList />
    </View>
  )
}
