import React, { useState, useEffect } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  console.log("name");
  useEffect(() => {
    console.log("hi");
    return () => {
      console.log("bye");
    };
  }, [count]);
  return (
    <div className="m-4 p-4 rounded-lg bg-gray-50">
      <button
        onClick={() => {
          setCount(1);
        }}
      >
        Click Me
      </button>
      <h3>Count:{count}</h3>
      <h2>Name:{name}</h2>
      <h3>Location:Dehradun</h3>
      <h4>Contact:@Akshaytwitter</h4>
    </div>
  );
};

export default User;
