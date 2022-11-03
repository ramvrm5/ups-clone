import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:5001/api/banking-dragon",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </TailwindProvider>
  );
}

//npm run dev:tailwind
//stepzen import curl https://ups-clone-stepzen-49fee-default-rtdb.firebaseio.com/orders.json --query-type Order --query-name getOrders --name order
