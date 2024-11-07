import React, { useState } from "react";
import { initialStudents, initialStaff } from "../data/initialData";
import StudentList from "./StudentList";
import StaffList from "./StaffList";
import RecordForm from "./RecordForm";
import "../App.css";

const App = () => {
  const [students, setStudents] = useState(initialStudents);
  const [staff, setStaff] = useState(initialStaff);

  const handleAddStudent = (student) => {
    setStudents([...students, { id: Date.now(), ...student }]);
  };

  const handleAddStaff = (member) => {
    setStaff([...staff, { id: Date.now(), ...member }]);
  };

  const handleDeleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const handleDeleteStaff = (id) => {
    setStaff(staff.filter((member) => member.id !== id));
  };

  return (
    <div className="container">
      <h1>EduTrack</h1>
      <h2>Add Student</h2>
      <RecordForm onAdd={handleAddStudent} />
      <StudentList students={students} onDelete={handleDeleteStudent} />
      <h2>Add Staff</h2>
      <RecordForm onAdd={handleAddStaff} />
      <StaffList staff={staff} onDelete={handleDeleteStaff} />
    </div>
  );
};

export default App;
