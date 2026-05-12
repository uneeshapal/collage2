import React, { useEffect, useState } from "react";
import axios from "axios";

function AllStudents() {

  const [studentsList, setStudentsList] = useState([]);

  const getStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8000/users");
      setStudentsList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();

    const interval = setInterval(() => {
      getStudents();
    }, 2000); 

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="container mt-4">

      <h3 className="text-center mb-3">All Students</h3>

      <table className="table table-bordered">

        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Course</th>
            <th>Address</th>
          </tr>
        </thead>

        <tbody>
          {studentsList.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.email}</td>
              <td>{s.phone}</td>
              <td>{s.course}</td>
              <td>{s.address}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default AllStudents;