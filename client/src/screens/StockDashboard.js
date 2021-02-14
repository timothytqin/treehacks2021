import { useEffect, useState } from "react";

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";
import { Grid, Typography } from "@material-ui/core";

import { firestore } from "../firebase/firebase";

export default function StockDashboard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    firestore
      .collection("stocks")
      .doc(props.ticker)
      .onSnapshot((doc) => {
        const docData = doc.data();
        const tempData = [];
        for (const timestamp in docData.time_data) {
          const newData = {};
          newData["time"] = timestamp;
          newData["price"] = docData.time_data[timestamp].price;
          tempData.push(newData);
        }
        setData(tempData);
      });
  }, []);

  return (
    <Grid
      container
      style={{
        flex: 1,
        justifyContent: "center",
        padding: "5% 20%",
      }}
    >
      <Grid container direction="row">
        <Grid item style={{ flex: 1, backgroundColor: "#ff00ff" }}>
          <Grid container item>
            <Typography>DOW Jones</Typography>
            <Typography>Dow Jones Industrial Average</Typography>
          </Grid>
          <Grid container item>
            <Typography>31,458.40</Typography>
            <Typography>+27.70</Typography>
          </Grid>
        </Grid>
        <Grid item style={{ backgroundColor: "#00ffff" }}>
          <Grid container>
            <Grid
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                backgroundColor: "#00ff00",
              }}
            />
            <Grid>
              <Typography>Positivity</Typography>
              <Typography>Score</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AreaChart
        width={750}
        height={300}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" type="number" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </Grid>
  );
}
