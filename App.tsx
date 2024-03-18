import { StatusBar } from "expo-status-bar";
import RootStackNavigation from "./src/screens/routes/RootStackNavigation";

export default function App() {
  return (
    <RootStackNavigation>
      <StatusBar style="auto" />
    </RootStackNavigation>
  );
}
