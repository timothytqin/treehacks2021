import { useEffect, useState } from "react";
import StockDashboard from "./screens/StockDashboard";
import StockList from "./screens/StockList";
import { getRandInt } from "./lib";

import { firestore } from "./firebase/firebase";

function App() {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "row",
    },
  };

  const [selectedTicker, setSelectedTicker] = useState("");
  const [stockData, setStockData] = useState({});

  useEffect(() => {
    firestore
      .collection("stocks")
      .get()
      .then((stocks) => {
        const newStockData = {};
        stocks.docs.forEach((stockDoc) => {
          newStockData[stockDoc.id] = {
            ...stockDoc.data(),
            detail: { ...stockDoc.data().detail, score: getRandInt(30, 95) },
          };
          if (
            stockDoc.id == "MSFT" ||
            stockDoc.id == "CDNS" ||
            stockDoc.id == "ZM" ||
            stockDoc.id == "NVDA" ||
            stockDoc.id == "GOOG"
          ) {
            newStockData[stockDoc.id].detail.score = Math.max(
              newStockData[stockDoc.id].detail.score,
              getRandInt(90, 99)
            );
          }
          stockDoc.ref.update(newStockData[stockDoc.id]);
        });
        setStockData(newStockData);
      });
  }, []);

  return (
    <div className="App" style={styles.page}>
      <StockList data={stockData} selector={setSelectedTicker} />
      <StockDashboard ticker={selectedTicker} />
    </div>
  );
}

export default App;
