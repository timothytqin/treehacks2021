import logo from "./logo.svg";
import "./App.css";

import StockDashboard from "./screens/StockDashboard";

function App() {
  return (
    <div className="App" style={{ display: "flex" }}>
      <StockDashboard ticker="GME" />
    </div>
  );
}

export default App;
