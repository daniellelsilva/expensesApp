import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput'
import { ExpensesContext } from '../store/expenses-context'

export default function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext)
  return (
    <View style={styles.container}>
      <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
