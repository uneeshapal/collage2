import React from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";


const UserLogin = () => {
  const navigate = useNavigate();

  // react-hook-form setup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // submit function
  const onSubmit = (data) => {
    console.log(data);

    toast.success("Login successful!", {
      autoClose: 2000,
      theme: "dark",
      position: "top-center",
      onClose: () => navigate("/dashboard"),
    });
  };

  return (
    <div className="container mt-5 col-4 bg-light p-4 rounded shadow">

      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Image */}
        <img
          src="https://cdn-icons-gif.flaticon.com/17905/17905764.gif"
          alt="profile"
          className="rounded-circle mx-auto d-block mb-3"
          width="100"
        />

        {/* Name */}
        <label>Name</label>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter your name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <p style={{ color: "red" }}>{errors.name.message}</p>
        )}

        {/* Password */}
        <label>Password</label>
        <input
          type="password"
          className="form-control mb-2"
          placeholder="Enter password"
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        {/* Checkbox */}
        <div className="form-check mb-3">
          <input
            type="checkbox"
            
            {...register("agree", {
              required: "You must agree with terms",
            })}
          />
          <label className="form-check-label" htmlFor="agree">
            Agree with Team policy
          </label>

          {errors.agree && (
            <p style={{ color: "red" }}>{errors.agree.message}</p>
          )}
        </div>

        {/* Button */}
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>

        {/* Link */}
        <p className="text-center mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </p>

      </form>
    </div>
  );
};

export default UserLogin;