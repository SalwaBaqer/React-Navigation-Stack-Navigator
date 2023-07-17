import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NativeBaseProvider } from "native-base";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./components/Navigation";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <NativeBaseProvider>
          <RootNavigator />
        </NativeBaseProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}
