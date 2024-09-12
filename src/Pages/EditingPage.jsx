import React from "react";
import AddForm from "../Components/AddForm";
import useFetch from "../Hooks/useFetch";
import { useLoaderData } from "react-router-dom";

const EditingPage = () => {
  const URL=import.meta.env.VITE_URL;
  const data = useLoaderData();
  const { data: categories, error } = useFetch(
    `${URL}/api/categories`
  );
  return (
    <div className="bg-white">
      <AddForm categories={categories} isEditing={true} data={data} />
    </div>
  );
};

export const EditingLoader = async ({ params }) => {
  const { itemId } = params;
  const URL=import.meta.env.VITE_URL;
  const response = await fetch(`${URL}/api/products/${itemId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default EditingPage;
