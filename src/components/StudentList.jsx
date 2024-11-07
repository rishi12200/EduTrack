import React from "react";

const StudentList = ({ students, onDelete }) => {
  return (
    <div>
      <h2>Students</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} (Age: {student.age})
            <button onClick={() => onDelete(student.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
