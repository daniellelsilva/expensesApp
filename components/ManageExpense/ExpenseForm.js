import { TextInput, View } from "react-native";
import Input from "./Input";

export default function ExpenseForm() {
  return (
    <View>
      <Input
        label="Amount"
        textInputConfig={{}}
      />
      <Input label="Date" />      
      <Input label="Description" />      
    </View>
  )
}
