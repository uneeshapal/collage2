import React from "react";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UserRegister = lazy(() =>
  import ("./application/modules/user/userauth/UserRegister")
);

const UserLogin = lazy(() =>
  import("./application/modules/user/userauth/UserLogin")
);
const UserDashboard = lazy(() =>
import("./application/modules/user/userdashboard/UserDashboard")
);
const AllStudents = lazy(() =>
import("./application/modules/user/userdashboard/AllStudents")
);
const AddStudent = lazy(() =>
import("./application/modules/user/userdashboard/AddStudents")
);
const AllTeachers = lazy(() =>
import("./application/modules/user/userdashboard/AllTeachers")
);

const AddTeacher = lazy(() =>
import("./application/modules/user/userdashboard/AddTeachers")
);  

const Certificate = lazy(() =>
import("./application/modules/user/userdashboard/Certificate")
);

function App() {
  return (
    <>
     <Suspense fallback={    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
        alt="loading"
        style={{ width: "200px" }}
      />
      <p>Loading page...</p>
    </div>}>
      <Routes>

  <Route path="/" element={<UserDashboard />} />

  <Route path="/register" element={<UserRegister />} />

  <Route path="/login" element={<UserLogin />} />

  <Route path="/students" element={<AllStudents />} />

<Route path="/addstudent" element={<AddStudent />} />

<Route path="/teachers" element={<AllTeachers />} />

<Route path="/addteacher" element={<AddTeacher />} />

<Route path="/certificate" element={<Certificate />} />

</Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
