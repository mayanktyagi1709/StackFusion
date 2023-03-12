import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import UserForms from './components/UserForms';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Header></Header>
      <Form></Form>
      <Routes>
        <Route path="/submitted-forms" element={<UserForms/>}/>
      </Routes>
    </div>
  );
}

export default App;
