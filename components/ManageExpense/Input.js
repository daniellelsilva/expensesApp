import { TextInput, View } from "react-native";

export default function Input({ label, keyboardType }) {
  return (
    <View>
      <Text>{ label }</Text>
      <TextInput keyboardType={keyboardType} />
    </View>
  )
}
