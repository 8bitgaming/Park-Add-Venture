import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MyParks from "./pages/MyParks"
import LoginForm from "./pages/Login";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/myparks" element={<MyParks />} />
          <Route path="/login" element={<LoginForm />} />
        </Routes>
        
      </>
    </Router>
  );
}

export default App;
