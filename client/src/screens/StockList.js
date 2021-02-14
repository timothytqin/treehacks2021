import { useEffect, useState } from "react";

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { Grid, Typography, Box } from "@material-ui/core";

import ListItem from "../components/ListItem";
import ListSearchBar from "../components/ListSearchBar";

export default function StockList(props) {

  const styles = {
    background: {
        // backgroundColor: 'gray',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flex: 0.3,
    },
  };

  return (
    <Box style={{overflow: 'hidden', maxHeight: window.innerHeight,}}>
    <Grid container item style={styles.background}>
        <ListSearchBar/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>
        <ListItem/>

    </Grid>
    </Box>

  );
}
