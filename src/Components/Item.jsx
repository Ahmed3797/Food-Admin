import React from "react";
import { useNavigate } from "react-router-dom";

const Item = ({ item, delItem }) => {
  const navigate = useNavigate();

  function deleteItem() {
    const choice = confirm("Are you want to delete");
    if (choice) {
      delItem(item._id);
    }
  }
  function editing() {
    navigate(`/edit/${item._id}`);
  }

  return (
    <tr key={item.id} className="text-center">
      <td className="py-2 px-4 border-b flex justify-center">
        <img src={item.imageUrl} className="w-16 h-16 object-cover rounded-sm" alt="" />
      </td>
      <td className="py-2 px-4 border-b  ">{item.name}</td>
      <td className="py-2 px-4 border-b">${item.price.toFixed(2)}</td>
      <td className="py-2 px-4 border-b">{item.stock}</td>
      <td className="py-2 px-4 border-b">
        <button onClick={deleteItem}>x</button>
      </td>
      <td className="py-2 px-4 border-b">
        <button onClick={editing}>edit</button>
      </td>
    </tr>
  );
};

export default Item;
