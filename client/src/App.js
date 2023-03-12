import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import UserForms from "./components/UserForms";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const handleClick = () => {
    setSubmitted(false);
    navigate("/");
  };

  return (
    <div >
      {!submitted && (
        <>
          <Header></Header>
          <Form setSubmitted={setSubmitted}></Form>
        </>
      )}
      {submitted && (
        <div>
          <button className="bg-blue-500 pt-10px hover:bg-blue-700 text-white font-bold mt-4 ml-4 py-2 px-4 rounded" onClick={handleClick}>Go Back</button>
          <Routes>
            <Route path="/submitted-forms" element={<UserForms />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
