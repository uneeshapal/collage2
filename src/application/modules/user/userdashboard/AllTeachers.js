import React, { useEffect, useState } from "react";
import axios from "axios";

function AllTeachers() {

  const [teachersList, setTeachersList] = useState([]);

  const getTeachers = async () => {
    try {
      const res = await axios.get("http://localhost:8000/teachers");
      setTeachersList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeachers();

    const interval = setInterval(() => {
      getTeachers();
    }, 2000); 

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="container mt-4">

      <h3 className="text-center mb-3">All Teachers</h3>

      <table className="table table-bordered">

        <thead className="table-dark">
  <tr>
    <th>ID</th>
    <th>Teacher Name</th>
    <th>Gender</th>
    <th>DOB</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Department</th>
    <th>Subject</th>
    <th>Qualification</th>
    <th>Experience</th>
    <th>Address</th>
  </tr>
</thead>

<tbody>
  {teachersList.map((t) => (
    <tr key={t.id}>
      <td>{t.id}</td>
      <td>{t.name}</td>
      <td>{t.gender}</td>
      <td>{t.dob}</td>
      <td>{t.email}</td>
      <td>{t.phone}</td>
      <td>{t.department}</td>
      <td>{t.subject}</td>
      <td>{t.qualification}</td>
      <td>{t.experience} Years</td>
      <td>{t.address}</td>
    </tr>
  ))}
</tbody>

      </table>

    </div>
  );
}

export default AllTeachers;