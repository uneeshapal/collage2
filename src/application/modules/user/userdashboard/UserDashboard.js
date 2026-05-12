import { Link } from "react-router-dom";
import React, { useState } from 'react';
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBook,
  FaClipboardCheck
} from "react-icons/fa";

import "../../../../index.css";
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";


// const staticPieData = [
//   { name: "Students", value: 400 },
//   { name: "Teachers", value: 200 },
//   { name: "Courses", value: 100 },
// ];

// const barData = [
//   { name: "Mon", value: 20 },
//   { name: "Tue", value: 35 },
//   { name: "Wed", value: 50 },
//   { name: "Thu", value: 40 },
// ];
function UserDashboard() {
 
const [studentGrowth] = useState([
    { month: "Jan", students: 120 },
    { month: "Feb", students: 50 },
    { month: "Mar", students: 130 },
    { month: "Apr", students: 220 },
  ]);

  const pieData = [
    { name: "BCA", value: 120 },
    { name: "BTech", value: 90 },
    { name: "BBA", value: 70 },
    { name: "BA", value: 50 },
    { name: "BCom", value: 80 },
  ];

  const [selectedCourse, setSelectedCourse] = useState("BCA");

  const attendanceData = {
    BCA: [
      { day: "Mon", attendance: 90 },
      { day: "Tue", attendance: 85 },
      { day: "Wed", attendance: 92 },
    ],

    BTech: [
      { day: "Mon", attendance: 75 },
      { day: "Tue", attendance: 80 },
      { day: "Wed", attendance: 78 },
    ],

    BBA: [
      { day: "Mon", attendance: 88 },
      { day: "Tue", attendance: 82 },
      { day: "Wed", attendance: 86 },
    ],
  };

  const students = [
    { id: 1, name: "Rahul", course: "BCA" },
    { id: 2, name: "Priya", course: "BBA" },
  ];

  const teachers = [
    { id: 1, name: "Ankit", subject: "Java" },
    { id: 2, name: "Neha", subject: "React" },
  ];
  return (
    <div>

      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-3 fixed-top">
        <span className="navbar-brand" >Admin Dashboard</span>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-outline-light">login</button>
        </form>
      </nav>

      {/*  Sidebar + Content */}
      <div className="d-flex mt-5">

        {/* Sidebar */}
        <div
          className="d-flex flex-column p-3 bg-light"
          style={{ width: "250px", height: "100vh" }}
        >
          <ul className="nav flex-column">


            <li className="nav-item">
              <span className="nav-link" style={{ color: "#94a3b8" }}>
                Dashboard
              </span>
            </li>

            {/*  Simple Dropdown */}
            <ul className="sidebar-menu">

              {/* STUDENTS */}
              <details>
                <summary className="menu-title">STUDENTS</summary>

                <li className="menu-item">

                  <Link to="/students">
                    All Students
                  </Link>

                </li>

                <li className="menu-item text-danger">
                  <Link to="/addstudent">
                    Add Student
                  </Link>
                </li>
              </details>


              {/* TEACHERS */}
              <details className="mt-3">
                <summary className="menu-title">TEACHERS</summary>


                <li className="menu-item text-danger">
                  <Link to="/teachers">
                    All Teachers
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/addteacher">
                    Add Teacher
                  </Link>
                </li>
              </details>


              {/* ACADEMIC */}
              <details className="mt-3">
                <summary className="menu-title">ACADEMIC</summary>

                <li className="menu-item">
                  <Link to="/certificate">
                    Generate Certificate
                  </Link>
                </li>

                <li className="menu-item">
                  Results
                </li>
              </details>

            </ul>

            <hr />

            <div>
              <strong>Logout</strong>
            </div>

          </ul>

        </div>
        {/* sidebar end */}

        {/*Main Content */}
        <div className="container-fluid p-4">

          <h2>Welcome to Dashboard </h2>

          <div className="row mt-4">

            <div className="col-md-3 mb-3">

              <div className="card p-3 shadow bg-gray text-black">

                <div className="d-flex justify-content-between align-items-center">

                  <div>
                    <h6> Total Students</h6>
                    <h5>1200</h5>
                    <p className="text-success">↑12% This Month</p>
                  </div>

                  <div className="box box-blue">
                    <FaUserGraduate size={20} />
                  </div>

                </div>

              </div>

            </div>

            <div className="col-md-3 mb-3">

              <div className="card p-3 shadow bg-gray text-black">

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6> Total Teachers</h6>
                    <h5>120</h5>
                    <p className="text-success">↑8% This Month</p>
                  </div>

                  <div className="box box-warning">
                    <FaClipboardCheck size={20} />
                  </div>

                </div>

              </div>

            </div>

            <div className="col-md-3 mb-3">

              <div className="card p-3 shadow bg-gray text-black">

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6> Total Course</h6>
                    <h5>24</h5>
                    <p className="text-warning">↑5% This Month</p>
                  </div>

                  <div className="box box-green">
                    <FaBook size={20} />
                  </div>

                </div>

              </div>

            </div>

            <div className="col-md-3 mb-3">

              <div className="card p-3 shadow bg-gray text-black">

                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <h6> Total Attendance</h6>
                    <h5>92%</h5>
                    <p className="text-danger">↑3% This Month</p>
                  </div>
                  <div className="box box-purple">
                    <FaChalkboardTeacher size={20} />
                  </div>

                </div>

              </div>

            </div>

          </div>
          {/* main content end */}
          <div className="row mt-4">
            {/* graph */}

            {/* Line Graph */}
            <div className="col-md-4 mb-3">

              <div className="card p-3 shadow">

                <h6>Student Growth</h6>

                <ResponsiveContainer width="100%" height={250}>

                  <LineChart data={studentGrowth}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="students"
                      stroke="#2563eb"
                      strokeWidth={3}
                    />

                  </LineChart>

                </ResponsiveContainer>

              </div>

            </div>

            {/* Pie Chart */}
            <div className="col-md-4 mb-3">

              <div className="card p-3 shadow">

                <h6>Course Wise Students</h6>

                <ResponsiveContainer width="100%" height={250}>

                  <PieChart>

                    <Pie
                      data={pieData}
                      dataKey="value"
                      outerRadius={80}
                      label
                    >
                      <Cell fill="#2563eb" />
                      <Cell fill="#16a34a" />
                      <Cell fill="#7c3aed" />
                      <Cell fill="#f59e0b" />
                      <Cell fill="#ec4899" />
                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </div>


            {/* Bar Graph */}
            <div className="col-md-4 mb-3">

              <div className="card p-3 shadow">

                <div className="d-flex justify-content-between align-items-center mb-3">

                  <h6>Attendance</h6>

                  <select
                    className="form-select w-50"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                  >
                    <option value="BCA">BCA</option>
                    <option value="BTech">BTech</option>
                    <option value="BBA">BBA</option>
                  </select>

                </div>

                <ResponsiveContainer width="100%" height={250}>

                  <BarChart data={attendanceData[selectedCourse]}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="day" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                      dataKey="attendance"
                      fill="#f59e0b"
                      radius={[10, 10, 0, 0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </div>

          </div>
          {/* graph end */}



          <div className="row mt-4">

            {/* Students Table */}
            <div className="col-md-6">

              <div className="card p-3 shadow">

                <h6>Recent Students</h6>

                <table className="table">

                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Course</th>
                    </tr>
                  </thead>

                  <tbody>

                    {students.map((s) => (
                      <tr key={s.id}>
                        <td>{s.id}</td>
                        <td>{s.name}</td>
                        <td>{s.course}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>


            {/* Teachers Table */}
            <div className="col-md-6">

              <div className="card p-3 shadow">

                <h6>Recent Teachers</h6>

                <table className="table">

                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Subject</th>
                    </tr>
                  </thead>

                  <tbody>

                    {teachers.map((t) => (
                      <tr key={t.id}>
                        <td>{t.id}</td>
                        <td>{t.name}</td>
                        <td>{t.subject}</td>
                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UserDashboard;