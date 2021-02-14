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

  // const tickers = [
  //   "MSFT",
  //   "CDNS",
  //   "ZM",
  //   "NVDA",
  //   "GOOG",
  //   "AAL",
  //   "AG",
  //   "AMC",
  //   "AMD",
  //   "APHA",
  //   "BB",
  //   "BBBY",
  //   "BYND",
  //   "CTRM",
  //   "EXPR",
  //   "EZGO",
  //   "GM",
  //   "GME",
  //   "GTE",
  //   "HIMS",
  //   "INO",
  //   "IPOE",
  //   "IPOF",
  //   "JAGX",
  //   "KOSS",
  //   "LLIT",
  //   "MRNA",
  //   "MJ",
  //   "MSOS",
  //   "NAKD",
  //   "NCTY",
  //   "NOK",
  //   "NVAX",
  //   "OPEN",
  //   "RKT",
  //   "RLX",
  //   "RYCEY",
  //   "SBUX",
  //   "SHLS",
  //   "SIEB",
  //   "SLV",
  //   "SNDL",
  //   "SOXL",
  //   "SRNE",
  //   "STPK",
  //   "TGC",
  //   "TIRX",
  //   "TR",
  //   "TRVG",
  //   "WKHS",
  //   "XM",
  //   "ZOM",
  // ];
  // const tickerName = [
  //   "American Airlines Group Inc",
  //   "First Majestic Silver Corporation",
  //   "AMC Entertainment Holdings Inc",
  //   "Advanced Micro Devices",
  //   "Aphria Inc",
  //   "Blackberry Limited",
  //   "Bed Bath & Beyond Inc",
  //   "Beyond Meat Inc",
  //   "Cadence Design Systems Inc",
  //   "Castor Maritime Inc",
  //   "Express Inc",
  //   "EZGO Technologies Ltd",
  //   "General Motors Company",
  //   "GameStop Corporation",
  //   "Alphabet Inc Class C",
  //   "Gran Tierra Energy Inc",
  //   "Him & Hers Health Inc",
  //   "Inovio Pharmaceuticals Inc",
  //   "Social Capital Hedosophia Holdings Corporation V",
  //   "Social Capital Hedosophia Holdings Corporation VI",
  //   "Jaguar Health Inc",
  //   "Koss Corporation",
  //   "Lianluo Smart Limited",
  //   "Moderna Inc",
  //   "ETFMG Alternative Harvest ETF",
  //   "Microsoft Corporation",
  //   "AdvisorShares Pure US Cannabis ETF",
  //   "Naked Brand Group Limited",
  //   "The9 Limited",
  //   "Nokia Corporation",
  //   "Novavax Inc",
  //   "NVIDIA Corporation",
  //   "Opendoor Technologies Inc",
  //   "Rocket Companies Inc",
  //   "RLX Technology Inc",
  //   "Rolls-Royce Holdings plc",
  //   "Starbucks Corporation",
  //   "Shoals Technologies Group, Inc",
  //   "Siebert Financial Corporation",
  //   "iShares Silver Trust",
  //   "Sundial Growers Inc",
  //   "Direxion Daily Semiconductor Bull 2X Shares",
  //   "Sorrento Therapeutics Inc",
  //   "Star Peak Energy Transition Corporation",
  //   "Tengasco Inc",
  //   "Tian Ruixiang Holdings Ltd",
  //   "Tootsie Roll Industries Inc",
  //   "trivago N.V.",
  //   "Workhorse Group Inc",
  //   "Qualtrics International Inc",
  //   "Zomedica Corporation",
  //   "Zoom Video Communcations Inc",
  // ];
  const [selectedTicker, setSelectedTicker] = useState("");
  const [stockData, setStockData] = useState({});

  // useEffect(() => {
  //   firestore
  //     .collection("stocks")
  //     .get()
  //     .then((stocks) => {
  //       stocks.docs.forEach((stock, ind) => {
  //         firestore.doc(`stocks/${stock.id}`).update({
  //           details: {
  //             name: tickerName[ind],
  //           },
  //         });
  //       });
  //     });
  // }, []);

  useEffect(() => {
    firestore
      .collection("stocks")
      .get()
      .then((stocks) => {
        const newStockData = {};
        stocks.docs.forEach((stockDoc) => {
          newStockData[stockDoc.id] = {
            ...stockDoc.data(),
            score: getRandInt(45, 100),
          };
          if (
            stockDoc.id == "MSFT" ||
            stockDoc.id == "CDNS" ||
            stockDoc.id == "ZM" ||
            stockDoc.id == "NVDA" ||
            stockDoc.id == "GOOG"
          ) {
            newStockData[stockDoc.id].score = Math.max(
              newStockData[stockDoc.id].score,
              getRandInt(80, 100)
            );
          }
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
