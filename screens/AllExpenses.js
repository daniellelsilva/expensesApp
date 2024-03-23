import React from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'

export default function AllExpenses() {
  return (
    <View style={styles.container}>
      <ExpensesOutput expensesPeriod="Total" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
