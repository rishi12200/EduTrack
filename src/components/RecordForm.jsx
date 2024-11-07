import React, { useState } from "react";

const RecordForm = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (position) {
      onAdd({ name, position });
    } else {
      onAdd({ name, age });
    }
    setName("");
    setAge("");
    setPosition("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      {!position && (
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        />
      )}
      {position && (
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          placeholder="Position"
          required
        />
      )}
      <button type="submit">Add</button>
    </form>
  );
};

export default RecordForm;
