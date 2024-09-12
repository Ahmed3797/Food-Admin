import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DropdownMenu = ({ orderId, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [stat, setStat] = useState(status);
  const URL = import.meta.env.VITE_URL;
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleStatusChange = async (newStatus) => {
    try {
      const token = localStorage.getItem("authToken");

      const response = await fetch(`${URL}/api/orders/${orderId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (response.ok) {
        setStat(newStatus);
        setIsOpen(false);

        toast.success(`Order status updated to ${newStatus}`, {
          autoClose: 2000,
        });
      } else {
        toast.error("Failed to update order status", {
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error("An error occurred while updating status", {
        autoClose: 2000,
      });
    }
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {stat}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleStatusChange("pending")}
            >
              Pending
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleStatusChange("shipped")}
            >
              Shipped
            </button>
            <button
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => handleStatusChange("delivered")}
            >
              Delivered
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
