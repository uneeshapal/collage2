import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";




function UserRegister() {
  const mynav = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    await axios.post("http://localhost:8000/users", data);
    console.log("Saved:", data);

    toast.success("Registration successful!", {
      autoClose: 1000,
      theme: "dark",
      position: "top-center"
    });
    setTimeout(() => {
      mynav("/dashboard");
    }
      , 2000);
  }

  return (
    <div className="container mt-5 col-md-5">

      <div className="card p-4 shadow">
        <h3 className="text-center mb-3">User Register</h3>

        <form onSubmit={handleSubmit(onSubmit)}>

          {/* Name */}
          <div className="mb-3">
            <label className="form-label">Full Name  </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
            />

            {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
          </div>

          {/* Email */}
         <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p className="text-danger">{errors.email.message}</p>}
          </div>

          {/* Password */}
        <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <p className="text-danger">{errors.password.message}</p>}
          </div>

            {/* Phone */}
          <div className="mb-3">
            <label>Phone</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone number"
              {...register("phone")}
            />
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-success w-100">
            Register

          </button>


        </form>

      </div>

    </div>
  );
}

export default UserRegister;