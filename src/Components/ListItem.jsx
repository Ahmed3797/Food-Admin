import React from "react";
import Item from "./Item";
import useFetch from "../Hooks/useFetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThreeDots } from "react-loader-spinner";

const ListItem = () => {
  const URL = import.meta.env.VITE_URL;
  const { data, error, loading, setData } = useFetch(`${URL}/api/products`);

  if (loading) {
    return (
      <div className="flex flex-1 justify-center items-center">
        <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#134B70"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }
  if (data?.length < 0) {
    return <p>No item added yet</p>;
  }

  async function delItem(id) {
    try {
      const response = await fetch(`${URL}/api/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      setData((state) => {
        let arr = state.filter((item) => {
          return item._id !== id;
        });
        return arr;
      });

      toast.success("Item deleted successfully", { autoClose: 2000 });
    } catch (error) {
      toast.error("Failed to delete item", { autoClose: 2000 });
    }
  }

  return (
    <div>
      <div className="container mx-auto ">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border-2 rounded-md border-gray-200">
            <thead className="bg-[#508C9B] text-center">
              <tr>
                <th className="py-2 px-8 border-b ">Item</th>
                <th className="py-2 px-4 border-b ">Title</th>
                <th className="py-2 px-4 border-b ">Price</th>
                <th className="py-2 px-4 border-b ">Stock</th>
                <th className="py-2 px-4 border-b">Remove</th>
                <th className="py-2 px-4 border-b">Edit</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item) => (
                <Item key={item._id} item={item} delItem={delItem} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
