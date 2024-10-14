import React, { useState } from "react";

const Contact = () => {
  const [countState, setCountState] = useState(0);
  return (
    <div>
      <h1>Contact Us Page</h1>
      {countState}
      <button onClick={() => setCountState(1)}></button>
    </div>
  );
};
export default Contact;
