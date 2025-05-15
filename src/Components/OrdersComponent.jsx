import React from "react";
import Orders from "./Orders";
import useFetch from "../Hooks/useFetch";
import { ThreeDots } from "react-loader-spinner";

const OrdersComponent = () => {
  const URL = import.meta.env.VITE_URL;
  const token = localStorage.getItem("authToken");
  const url = `${URL}/api/orders/all`;
  const { data, error, loading } = useFetch(url, {
    method: "Get",
    headers: {
      "Content-Type": "application/json",
      "x-auth-token": token,
    },
  });

  if (loading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#FFCDB2"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div>
      {data.map((item) => {
        return <Orders item={item} key={item._id} />;
      })}
    </div>
  );
};

export default OrdersComponent;
