import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function AddStudent() {
  const navigate = useNavigate();

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();


  const onSubmit = async (data) => {
    try {
      await axios.post("http://localhost:8000/users", data);

      toast.success("Admission successful!", {
        autoClose: 1500,
        theme: "dark",
        position: "top-center",
      });
         navigate("/");

      setTimeout(() => {
         navigate("/"); 
      }, 1500);
    } catch (error) {
      toast.error("Something went wrong!");
      console.log(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg p-4 rounded-4">
            <h3 className="text-center mb-3">Student Admission Form</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter full name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name.message}</small>
                )}
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email.message}</small>
                )}
              </div>

              {/* Phone */}
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter phone number"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && (
                  <small className="text-danger">{errors.phone.message}</small>
                )}
              </div>

              {/* Course */}
              <div className="mb-3">
                <label className="form-label">Course</label>
                <select
                  className="form-control"
                  {...register("course", { required: "Course is required" })}
                >
                  <option value="">Select Course</option>
                  <option value="BCA">BCA</option>
                  <option value="BBA">BBA</option>
                  <option value="BSC">BSC</option>
                  <option value="MCA">MCA</option>
                </select>
                {errors.course && (
                  <small className="text-danger">{errors.course.message}</small>
                )}
              </div>

              {/* Address */}
              <div className="mb-3">
                <label className="form-label">Address</label>
                <textarea
                  className="form-control"
                  placeholder="Enter address"
                  {...register("address", { required: "Address is required" })}
                />
                {errors.address && (
                  <small className="text-danger">{errors.address.message}</small>
                )}
              </div>

              <button type="submit" className="btn btn-success w-100">
                Submit Admission
              </button>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;