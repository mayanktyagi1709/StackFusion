import React, { useState, useEffect } from 'react';

const Forms = () => {
  const [forms, setForms] = useState([]);

  useEffect(() => {
    const fetchForms = async () => {
      try {
        const response = await fetch('http://localhost:8800/api/user'); 
        const data = await response.json();// replace with your API endpoint
        setForms(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForms();
  }, []);

  return (
    <div>
      <h1>Submitted Forms</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form._id}>
              <td>{form.name}</td>
              <td>{form.email}</td>
              <td>{form.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Forms;
