import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function AddTeachers() {

  const navigate = useNavigate();
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm();



  // Submit Form
  const onSubmit = async (data) => {

    try {

      await axios.post(
        "http://localhost:8000/teachers",
        data
      );

      toast.success("Teacher Added Successfully!", {
        autoClose: 1500,
        theme: "dark",
        position: "top-center",
      });

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

        <div className="col-md-8">

          <div className="card shadow-lg border-0 rounded-4">

            {/* Header */}
            <div className="card-header bg-dark text-white text-center rounded-top-4 p-3">
              <h3>Add Teacher</h3>
            </div>

            {/* Body */}
            <div className="card-body p-4">

              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="row">

                  {/* Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">
                      Full Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter teacher name"
                      {...register("name", {
                        required: "Name is required",
                      })}
                    />

                    {errors.name && (
                      <small className="text-danger">
                        {errors.name.message}
                      </small>
                    )}
                  </div>

                  {/* Gender */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Gender
                    </label>

                    <select
                      className="form-select"
                      {...register("gender", {
                        required: "Gender is required",
                      })}
                    >
                      <option value="">
                        Select Gender
                      </option>

                      <option value="Male">
                        Male
                      </option>

                      <option value="Female">
                        Female
                      </option>

                      <option value="Other">
                        Other
                      </option>

                    </select>

                    {errors.gender && (
                      <small className="text-danger">
                        {errors.gender.message}
                      </small>
                    )}

                  </div>

                  {/* DOB */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Date of Birth
                    </label>

                    <input
                      type="date"
                      className="form-control"
                      {...register("dob", {
                        required: "DOB is required",
                      })}
                    />

                    {errors.dob && (
                      <small className="text-danger">
                        {errors.dob.message}
                      </small>
                    )}

                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      {...register("email", {
                        required: "Email is required",
                      })}
                    />

                    {errors.email && (
                      <small className="text-danger">
                        {errors.email.message}
                      </small>
                    )}

                  </div>

                  {/* Phone */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter phone"
                      {...register("phone", {
                        required: "Phone is required",
                      })}
                    />

                    {errors.phone && (
                      <small className="text-danger">
                        {errors.phone.message}
                      </small>
                    )}

                  </div>

                  {/* Department */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Department
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter department"
                      {...register("department", {
                        required: "Department is required",
                      })}
                    />

                    {errors.department && (
                      <small className="text-danger">
                        {errors.department.message}
                      </small>
                    )}

                  </div>

                  {/* Subject */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Subject
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter subject"
                      {...register("subject", {
                        required: "Subject is required",
                      })}
                    />

                    {errors.subject && (
                      <small className="text-danger">
                        {errors.subject.message}
                      </small>
                    )}

                  </div>

                  {/* Qualification */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Qualification
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter qualification"
                      {...register("qualification", {
                        required: "Qualification is required",
                      })}
                    />

                    {errors.qualification && (
                      <small className="text-danger">
                        {errors.qualification.message}
                      </small>
                    )}

                  </div>

                  {/* Experience */}
                  <div className="col-md-6 mb-3">

                    <label className="form-label">
                      Experience
                    </label>

                    <input
                      type="number"
                      className="form-control"
                      placeholder="Years of experience"
                      {...register("experience", {
                        required: "Experience is required",
                      })}
                    />

                    {errors.experience && (
                      <small className="text-danger">
                        {errors.experience.message}
                      </small>
                    )}

                  </div>

                  {/* Address */}
                  <div className="col-md-12 mb-3">

                    <label className="form-label">
                      Address
                    </label>

                    <textarea
                      className="form-control"
                      rows="3"
                      placeholder="Enter address"
                      {...register("address", {
                        required: "Address is required",
                      })}
                    />

                    {errors.address && (
                      <small className="text-danger">
                        {errors.address.message}
                      </small>
                    )}

                  </div>

                </div>

                {/* Buttons */}
                <div className="d-flex gap-2">

                  <button
                    type="submit"
                    className="btn btn-success w-100"
                  >
                    Add Teacher
                  </button>

                 

                </div>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AddTeachers;