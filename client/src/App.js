import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Donation from "./components/Store";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Donation />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
