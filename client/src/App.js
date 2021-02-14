import { useEffect, useState } from "react";
import StockDashboard from "./screens/StockDashboard";
import StockList from "./screens/StockList";

import { firestore } from "./firebase/firebase";

function App() {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "row",
    },
  };

  const [selectedTicker, setSelectedTicker] = useState("MSFT");
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    firestore
      .collection("stocks")
      .get()
      .then((stocks) => {
        const newStockData = {};
        stocks.docs.forEach((stockDoc) => {
          newStockData[stockDoc.id] = stockDoc.data();
        });
        setStockData(newStockData);
      });
  }, []);

  useEffect(() => {
    console.log("Setting selected ticker");
    console.log(selectedTicker);
  }, [selectedTicker]);

  return (
    <div className="App" style={styles.page}>
      <StockList data={stockData} selector={setSelectedTicker} />
      <StockDashboard ticker={selectedTicker} />
    </div>
  );
}

export default App;
