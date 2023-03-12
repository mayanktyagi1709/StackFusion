import React, { useState, useEffect } from 'react';

const Forms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch('https://stack-fusion-6iis7rhzp-mayanktyagi1709.vercel.app/api/user'); 
        const data = await response.json();
        setForms(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div className="flex flex-col justify-center mx-4">
      <h1 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Submitted Forms</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
            <th>Phone Number</th>

          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form._id}>
              <td>{form.name}</td>
              <td>{form.email}</td>
              <td>{form.dob}</td>
              <td>{form.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Forms;
