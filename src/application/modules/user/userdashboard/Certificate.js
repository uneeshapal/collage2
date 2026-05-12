import React, { useState } from "react";

function Certificate() {

  const [formData, setFormData] = useState({
    name: "",
    course: "",
    college: "",
    instructor: "",
    date: "",
  });

  const [showCertificate, setShowCertificate] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const generateCertificate = (e) => {
    e.preventDefault();
    setShowCertificate(true);
  };

  return (
    <div className="container mt-5">

      {!showCertificate ? (

        <div className="card shadow-lg border-0 rounded-4 p-4">

          <h2 className="text-center mb-4 text-primary">
            Generate Certificate
          </h2>

          <form onSubmit={generateCertificate}>

            <div className="row">

              {/* Student Name */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Student Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter student name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Course */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Course Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* College */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  College Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter college name"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Instructor */}
              <div className="col-md-6 mb-3">

                <label className="form-label">
                  Instructor Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter instructor name"
                  name="instructor"
                  value={formData.instructor}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Date */}
              <div className="col-md-12 mb-3">

                <label className="form-label">
                  Certificate Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Generate Certificate
            </button>

          </form>

        </div>

      ) : (

        <div
          className="shadow-lg p-5 mt-4 text-center"
          style={{
            border: "12px solid #0d6efd",
            borderRadius: "20px",
            background: "#fff",
          }}
        >

          <h1
            className="fw-bold text-uppercase"
            style={{ letterSpacing: "3px" }}
          >
            Certificate
          </h1>

          <h4 className="text-muted mb-4">
            Of Achievement
          </h4>

          <hr />

          <p className="fs-5 mt-4">
            This certificate is proudly presented to
          </p>

          <h1 className="text-primary fw-bold my-4">
            {formData.name}
          </h1>

          <p className="fs-5">
            for successfully completing
          </p>

          <h3 className="fw-bold">
            {formData.course}
          </h3>

          <p className="mt-3">
            at
          </p>

          <h5 className="text-secondary">
            {formData.college}
          </h5>

          <p className="mt-4">
            Awarded on :
            <strong> {formData.date}</strong>
          </p>

          <div className="d-flex justify-content-between mt-5">

            <div className="text-center">

              <hr />

              <p>{formData.instructor}</p>

              <small>Instructor Signature</small>

            </div>

            <div className="text-center">

              <hr />

              <p>Director</p>

              <small>Director Signature</small>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default Certificate;