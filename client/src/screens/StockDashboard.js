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
        padding: "5% 25%",
      }}
    >
      <Grid container direction="row">
        <Grid item style={{ flex: 1, }}>
          <Grid container item style={{ alignItems: 'flex-end' }}>
            <Typography style={{fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 44, lineHeight: 1, marginRight: 25}}>DOW Jones</Typography>
            <Typography style={{fontFamily: 'Montserrat', fontWeight: '500', fontSize: 14, color: '#838383'}}>Dow Jones Industrial Average</Typography>
          </Grid>
          <Grid container item style={{ marginTop: 20 }}>
            <Typography style={{fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 18, lineHeight: 1, marginRight: 25}}>31,458.40</Typography>
            <Typography style={{fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 18, lineHeight: 1, color: '#5BC096'}}>+27.70</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container style={{ alignItems: 'center' }}>
            <Grid
              container
              style={{
                width: 80-10,
                height: 80-10,
                borderRadius: 50,
                backgroundColor: "#5BC096",
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Typography style={{textAlign: 'center', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 36, color: '#ffffff'}}>90</Typography>
            </Grid>
            <Grid style={{ marginLeft: 10 }}>
              <Typography style={{textAlign: 'left', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 18}}>Positivity</Typography>
              <Typography style={{textAlign: 'left', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: 18}}>Score</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <AreaChart
        width={window.innerWidth * 0.53}
        height={350}
        data={data}
        margin={{ top: 50, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#5BC096" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#5BC096" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" type="number" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#5BC096"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
      </AreaChart>
    </Grid>
  );
}
