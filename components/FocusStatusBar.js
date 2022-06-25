import { StatusBar } from "expo-status-bar";
import { useIsFocused } from "@react-navigation/core";

export default function FocusStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}
