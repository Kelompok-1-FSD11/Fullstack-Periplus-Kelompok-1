import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register";
import './App.css'

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            {/* <Route path="/" element={<Login />} /> */}
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </Router>
 
    </div>
  );
}

export default App;
