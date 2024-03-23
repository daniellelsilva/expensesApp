import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

export default function RecentExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Last 7 days" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})