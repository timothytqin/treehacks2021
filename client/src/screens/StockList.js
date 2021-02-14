import { Grid, Typography, Box } from "@material-ui/core";
import { useState, useEffect } from "react";

import ListItem from "../components/ListItem";
import ListSearchBar from "../components/ListSearchBar";

export default function StockList(props) {
  const { data, selector } = props;
  const styles = {
    background: {
      flexDirection: "column",
    },
  };

  const [search, setSearch] = useState("");

  const getFilteredStocks = () => {
    const res = Object.keys(data).filter(
      (ticker) =>
        ticker.toLowerCase().includes(search.toLowerCase()) ||
        data[ticker].details.name.toLowerCase().includes(search.toLowerCase())
    );
    console.log(res);
    return res;
  };

  return (
    <Grid>
      <ListSearchBar setSearch={setSearch} />
      <Box
        style={{
          overflowY: "scroll",
          height: window.innerHeight * 0.85,
        }}
      >
        <Grid container item style={styles.background}>
          {getFilteredStocks().map((ticker) => {
            return (
              <ListItem
                ticker={ticker}
                name={data[ticker].details.name}
                data={data[ticker]}
                onClick={selector}
              />
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
}
