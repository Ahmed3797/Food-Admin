import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddForm = ({ categories, isEditing = false, data: editformdata }) => {
  const URL = import.meta.env.VITE_URL;

  const [imagePreview, setImagePreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  let imgreq;
  useEffect(() => {
    if (isEditing && editformdata) {
      setValue("name", editformdata.name);
      setValue("description", editformdata.description);
      setValue("stock", editformdata.stock);
      setValue("price", editformdata.price);
      setImagePreview(`${editformdata.imageUrl}`);
      imgreq = isEditing ? false : true;
    }
  }, [isEditing, editformdata, setValue]);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("stock", data.stock);
    formData.append("price", data.price);
    formData.append("category", data.category);

    const method = isEditing ? "PUT" : "POST";
    const url = isEditing
      ? `${URL}${editformdata._id}`
      : `${URL}/api/products/`;
    const token = localStorage.getItem("authToken");
    fetch(url, {
      method: method,
      headers: {
        "x-auth-token": token,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          toast.success(
            isEditing
              ? "Product updated successfully!"
              : "Product added successfully!"
          );
          navigate("/list");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      })
      .catch((error) => {
        toast.error("Error while submitting the form");
      });
  };

  function findSelectValue() {
    for (let item of categories) {
      if (item._id == editformdata.category) {
        return true;
      }
    }
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-5 col-span-1 block ">
      <h1>{isEditing ? "Edit Product" : "Add A Product"}</h1>
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <br />
        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className="w-32 h-32 object-cover my-2"
          />
        )}
        <input
          className="border-2 my-2 p-2 w-[200px] "
          type="file"
          onChange={handleImageChange}
          {...register("image", { required: { imgreq } })}
        />
        {errors.image && <p>{errors.image.message}</p>}
        <br />

        <input
          className="border-2 my-2 p-2"
          type="text"
          name="name"
          defaultValue={isEditing ? editformdata.name : " "}
          placeholder="Name name of Product "
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p>{errors.name.message}</p>}
        <br />

        <textarea
          className="border-2 my-2 p-2"
          rows={10}
          cols={30}
          defaultValue={isEditing ? editformdata.description : " "}
          name="desc"
          placeholder="Description of Product"
          {...register("description", { required: "Description is required" })}
        />
        {errors.desc && <p>{errors.desc.message}</p>}
        <br />

        <input
          className="border-2 my-2 p-2"
          type="number"
          name="name"
          defaultValue={isEditing ? editformdata.stock : " "}
          placeholder="Type Stock here"
          {...register("stock", { required: "Stcok is required" })}
        />
        {errors.stock && <p>{errors.srock.message}</p>}
        <br />

        <select
          className="border-2 my-2 p-2 me-3 w-[100px]"
          {...register("category", { required: "Select an option" })}
        >
          {categories.map((item) => {
            return (
              <option
                key={item._id}
                selected={isEditing ? findSelectValue() : ""}
                value={item._id}
              >
                {item.name}
              </option>
            );
          })}
        </select>
        <input
          className="border-2 my-2 p-2"
          type="number"
          name="price"
          placeholder="Type Price here"
          defaultValue={isEditing ? editformdata.price : " "}
          {...register("price", { required: "Price is required" })}
        />
        {errors.price && <p>{errors.price.message}</p>}
        <br />

        <input
          className="my-2 bg-[#FFCDB2] text-white w-[100px] p-2 hover:bg-[#d56b6e] cursor-pointer"
          type="submit"
          value={isEditing ? "Update" : "Add"}
        />
      </form>
    </div>
  );
};

export default AddForm;
