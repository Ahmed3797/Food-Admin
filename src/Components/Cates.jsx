import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Cates = ({ categories }) => {

  const URL=import.meta.env.VITE_URL;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const onSubmit = (data) => {
    const formData = new FormData();


    formData.append("image", data.image[0]); 
    formData.append("name", data.name);
    formData.append("description", data.description);
    const token = localStorage.getItem("authToken");
    fetch(`${URL}/api/categories`, {
      method: "POST",
      body: formData,
      headers: {
        "x-auth-token": token,
      },
    })
      .then((response) => {
        if (response.ok) {
          toast.success("Category added successfully!"); // Success notification
        } else {
          throw new Error("Failed to add category");
        }
      })
      .catch((error) => {
        toast.error("Error: " + error.message); // Error notification
      });
  };

  return (
    <>
      <div className="p-4">
        <div>
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#134B70]"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Add A Categories
            </span>
          </label>
        </div>

        {isChecked ? (
          <div className="p-5">
            <h1>Add a Category</h1>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              <br />
              <input
                className="border-2 my-2 p-2 w-[200px]"
                type="file"
                {...register("image", { required: "Image is required" })}
              />
              {errors.image && <p>{errors.image.message}</p>}
              <br />

              <input
                className="border-2 my-2 p-2"
                type="text"
                name="name"
                placeholder=" Name of Category "
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p>{errors.name.message}</p>}
              <br />

              <textarea
                className="border-2 my-2 p-2"
                rows={10}
                cols={30}
                name="desc"
                placeholder="Description of Category"
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.desc && <p>{errors.desc.message}</p>}
              <br />
              <input
                className="my-2 bg-[#134B70] text-white w-[160px] p-2 cursor-pointer hover:bg-[#152d3c]"
                type="submit"
                value="ADD CATEGORY"
              />
            </form>
          </div>
        ) : (
          <div>
            {categories.map((item) => {
              return <div key={item._id} className="flex justify-between items-center w-[80%] mx-auto shadow-lg p-2">
                <div>

                <p className="font-semibold text-[20px]">{item.name}</p>
                <p className="font-thin">{item.description}</p>

                </div>
                <img src={item.imageUrl} className="w-16 h-16 object-cover rounded-full" alt={item.name} />
                </div>;
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Cates;
