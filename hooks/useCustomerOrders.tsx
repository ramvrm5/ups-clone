import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ORDEERS } from "../graphql/queries";

const useCustomerOrders = () => {
  const { loading, error, data } = useQuery(GET_ORDEERS);

  return <div>useCustomerOrders</div>;
};

export default useCustomerOrders;
