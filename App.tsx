import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./navigator/RootNavigator";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}

//npm run dev:tailwind
//stepzen import curl https://ups-clone-stepzen-49fee-default-rtdb.firebaseio.com/orders.json --query-type Order --query-name getOrders --name order
/* 
type ItemsEntry {
  item_id: Int
  name: String
  price: Float
  quantity: Int
}
type TrackingItems {
  customer_id: String
  items: [Items]
}

type Query {
  getTrackingItemsById(id: ID!): TrackingItems
    @rest(
      endpoint: "https://ups-clone-stepzen-49fee-default-rtdb.firebaseio.com/trackingItems/$id.json"
    )
}

*/
