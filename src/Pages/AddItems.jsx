import { useEffect, useState } from "react";
import React from "react";
import Cates from "../Components/Cates";
import AddForm from "../Components/AddForm";
import useFetch from "../Hooks/useFetch";

const AddItems = () => {
  const URL=import.meta.env.VITE_URL;
  const { data: categories, error } = useFetch(
    `${URL}/api/categories`,
    
  );

  return (
    <div className="grid grid-child grid-cols-1 md:grid-cols-2  bg-white">
      <AddForm categories={categories} />
      <Cates categories={categories} />
    </div>
  );
};

export default AddItems;
