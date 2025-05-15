import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify"; 
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const URL = import.meta.env.VITE_URL;
  const onSubmit = (data) => {

    let url = `${URL}/api/users/login/admin`;
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", 
      },
      body: JSON.stringify(data),
    })
      .then(async (response) => {
        if (response.ok) {
          const data = await response.json();
           console.log(response.status)
          const { token } = data;
          const now = new Date().getTime();
          localStorage.setItem("authToken", token);
          localStorage.setItem("tokenTimestamp", now);
          toast.success("Login successful!", { autoClose: 2000 });

          navigate("/list");
        }
      })
      .catch((error) => {

        toast.error("Login failed. Please try again.", { autoClose: 2000 });
      });
  };
  return (
    <div className="flex items-center justify-center w-full h-full flex-1 bg-white ">
      <div className="w-full max-w-sm p-8 space-y-8  bg-gray-10 rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required" })}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium text-white bg-[#FFCDB2] rounded-md hover:bg-[#d56b6e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
