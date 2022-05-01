import "./App.css";
import Header from "./components/Header";
import MyParks from "./components/MyParks/myParks";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div className="App">
      <Header />
      <MyParks />
    </div>
  );
}

export default App;
