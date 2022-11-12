import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ORDERS } from "../graphql/queries";

const useCustomerOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDERS);

  return <div>
    useCustomerOrders
  </div>;
};

export default useCustomerOrders;
