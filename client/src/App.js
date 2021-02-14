import { useEffect } from "react";
import StockDashboard from "./screens/StockDashboard";
import StockList from "./screens/StockList";

import { firestore } from "./firebase/firebase";



function App() {

  const styles = {
    page: {
        display: "flex", 
        flexDirection: 'row'
    },
  };



  return (
    <div className="App" style={styles.page}>
      <StockList />
      <StockDashboard ticker="MSFT" />
    </div>
  );
}

export default App;
