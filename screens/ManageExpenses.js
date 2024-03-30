import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'

export default function ManageExpenses({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const isEditing =  !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Edit Expense" : "Add Expense"
    })
  }, [navigation, isEditing])


  return (
    <View>
      Manage Expenses
    </View>
  )
}
