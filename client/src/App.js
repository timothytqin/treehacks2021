import StockDashboard from "./screens/StockDashboard";
import StockList from "./screens/StockList";

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
      <StockDashboard ticker="GME" />
    </div>
  );
}

export default App;
