import "./App.css";
import Header from "./components/Header";
import MyParks from "./components/MyParks/myParks";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
