import { Grid, Typography, Box } from "@material-ui/core";

import ListItem from "../components/ListItem";
import ListSearchBar from "../components/ListSearchBar";

export default function StockList(props) {
  const { data, selector } = props;
  const styles = {
    background: {
      flexDirection: "column",
    },
  };

  return (
    <Grid>
      <ListSearchBar />
      <Box
        style={{
          overflowY: "scroll",
          height: window.innerHeight * 0.86,
        }}
      >
        <Grid container item style={styles.background}>
          {Object.keys(data).map((ticker) => {
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
