import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // // Name Verification
    // if (name.length < 2 || !isNaN(name))
    //   setNameError("Please Enter a Valid Name");
    // else setNameError("");

    // //Email Verification
    // if (email.indexOf("@") === -1 || email.indexOf(".") === -1)
    //   setEmailError("Please Enter a Valid Email");
    // else setNameError("");

    // //DOB Verification

    // const dobDate = new Date(dob);
    // const today = new Date();
    // const age = today.getFullYear() - dobDate.getFullYear();

    // if (age < 18)
    //   setNameError("User must be above 18");
    // else setNameError("");

    // //Phone number verification  };
  }

  return (
    <div className="flex justify-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-2/5"
        // onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="Email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="Email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          {
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          }
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            DOB
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dob"
            type="date"
            placeholder="Name"
            value={dob}
            onChange={(e) => {
              setDob(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
