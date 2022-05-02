import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MyParks from "./pages/MyParks"

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/myparks" element={<MyParks />} />
          {/* <Route path="/myparks:id" element={<MyParks />} /> REPLACE WITH :ID VERSION ONCE GRAPHQL IN PLACE*/}
        </Routes>
      </>
    </Router>
  );
}

export default App;
