import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./app.scss";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import Login from "./pages/login/Login";
import { Error } from "./pages/Error";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Watch" element={<Watch />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
