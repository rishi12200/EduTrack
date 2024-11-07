import React from "react";

const StaffList = ({ staff, onDelete }) => {
  return (
    <div>
      <h2>Staff</h2>
      <ul>
        {staff.map((member) => (
          <li key={member.id}>
            {member.name} (Position: {member.position})
            <button onClick={() => onDelete(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StaffList;
