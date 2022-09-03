import React, { useState } from "react";

const Checking = () => {
  const [userId, setUserId] = useState("");

  const users = [
    { id: 1, name: "Nishant" },
    { id: 2, name: "Prashant" },
  ];
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));
  return (
    <div>
      <h3>Option Checking</h3>
      <select value={userId} onChange={(e) => setUserId(e.target.value)}>
        <option value={""}></option>
        {userOptions}
      </select>
    </div>
  );
};

export default Checking;
