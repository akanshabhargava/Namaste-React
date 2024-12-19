// import React, { useState } from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4 ">Contact Us Page</h1>
      <form>
        <input
          type="text"
          placeholder="name"
          className="border border-black m-2 p-2"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-black m-2 p-2"
        />
        <button className="border border-black m-2 p-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
      {/* {countState}
      <button onClick={() => setCountState(1)}></button> */}
    </div>
  );
};
export default Contact;
