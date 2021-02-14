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

import { firestore } from "../firebase/firebase";

import Score from "../components/Score";
import Metric from "../components/Metric";
import Article from "../components/Article";
import { TYPOGRAPHY, PRIMARY_COLOR } from "../style/css/globalStyles";
import { getCurrPrice, getPriceChange } from "../lib";

export default function StockDashboard(props) {
  const [details, setDetails] = useState({});
  const [data, setData] = useState([]);

  useEffect(() => {
    if (props.ticker) {
      firestore
        .collection("stocks")
        .doc(props.ticker)
        .onSnapshot((doc) => {
          const docData = doc.data();
          setDetails(docData.details);
          let tempData = [];
          for (const timestamp in docData.time_data) {
            const newData = {};
            newData["time"] = new Date(timestamp).toLocaleDateString();
            newData["price"] = docData.time_data[timestamp].closing_price;
            tempData.push(newData);
          }

          tempData = tempData.sort((a, b) => {
            return new Date(a.time) < new Date(b.time) ? -1 : 1;
          });

          setData(tempData);
        });
    }
  }, [props.ticker]);

  const styles = {
    tickerName: {
      fontSize: 44,
      lineHeight: 1,
      marginRight: 25,
    },
    subscript: {
      fontSize: 14,
      color: "#838383",
    },
    value: {
      marginRight: 20,
    },
  };

  return props.ticker ? (
    <Box
      style={{
        overflowY: "scroll",
        height: window.innerHeight * 0.91,
        flex: 1,
      }}
    >
      <Grid container style={{ padding: "5% 8%" }}>
        <Grid container direction="row">
          <Grid item style={{ flex: 1 }}>
            <Grid container item style={{ alignItems: "flex-end" }}>
              <Typography style={{ ...TYPOGRAPHY, ...styles.tickerName }}>
                {props.ticker}
              </Typography>
              <Typography style={{ ...TYPOGRAPHY, ...styles.subscript }}>
                {details.name}
              </Typography>
            </Grid>
            {data.length > 0 && (
              <Grid container item style={{ marginTop: 20 }}>
                <Typography style={{ ...TYPOGRAPHY, ...styles.value }}>
                  {parseFloat(data[data.length - 1].price).toFixed(2)}
                </Typography>
                <Typography
                  style={{
                    ...TYPOGRAPHY,
                    color:
                      parseFloat(
                        data[data.length - 1].price - data[0].price
                      ).toFixed(2) > 0
                        ? PRIMARY_COLOR
                        : "#f00",
                  }}
                >
                  {parseFloat(
                    data[data.length - 1].price - data[0].price
                  ).toFixed(2)}
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid item>
            <Score score={90} label1={"Positivity"} label2={"Score"} />
          </Grid>
        </Grid>
        {data.length > 0 && (
          <Grid container>
            <AreaChart
              width={window.innerWidth * 0.55}
              height={350}
              data={data}
              margin={{ top: 50 }}
            >
              <defs>
                <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="5%"
                    stopColor={PRIMARY_COLOR}
                    stopOpacity={0.8}
                  />
                  <stop
                    offset="95%"
                    stopColor={PRIMARY_COLOR}
                    stopOpacity={0}
                  />
                </linearGradient>
                <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor={"#f00"} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={"#f00"} stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="time" type="category" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                stroke={
                  data[data.length - 1].price - data[0].price > 0
                    ? PRIMARY_COLOR
                    : "#f00"
                }
                fillOpacity={1}
                fill={`url(#${
                  data[data.length - 1].price - data[0].price > 0
                    ? "green"
                    : "red"
                })`}
              />
            </AreaChart>
          </Grid>
        )}
        <Typography
          style={{
            ...TYPOGRAPHY,
            textAlign: "left",
            color: "#838383",
            fontSize: 12,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Positivity Score Metrics
        </Typography>
        <Grid container direction="row">
          <Metric
            score={85}
            label1={"Environment"}
            label2={"Impact"}
            bullets={[
              "C02 Performance Score is B",
              "C02 Relative Output Rate is 14.64 times",
              "Plastic Performance score is 97.68",
              "Plastic Efficiency Rate is 59.98%",
              "Sulfer Performance Score is 99",
            ]}
          />
          <Metric
            score={89}
            label1={"Labor"}
            label2={"Practices"}
            bullets={[
              "93% of Approval of Top Management",
              "97.5% Employee Satisfaction",
              "79% for an Employee Recomendation",
            ]}
          />
          <Metric
            score={97}
            label1={"Social"}
            label2={"Impact"}
            bullets={[
              "Calculated through Sentiment Analysis of 8 News Sources",
              "Calculated through Gender and LGBT Workplace Equality Statistics",
            ]}
          />
        </Grid>
        <Typography
          style={{
            ...TYPOGRAPHY,
            textAlign: "left",
            color: "#838383",
            fontSize: 12,
            marginTop: 20,
            marginBottom: 20,
          }}
        >
          Found Articles
        </Typography>
        <Grid container direction="row" style={{ display: "flex" }}>
          <Article
            imgSrc={
              "https://www.pngitem.com/pimgs/m/549-5490862_transparent-melon-clipart-clip-art-watermelon-hd-png.png"
            }
            title={"Melon Lord"}
            timestamp={"9h ago"}
          />
          <Article
            imgSrc={
              "https://www.pngitem.com/pimgs/m/549-5490862_transparent-melon-clipart-clip-art-watermelon-hd-png.png"
            }
            title={"Melon Lord"}
            timestamp={"9h ago"}
          />
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Grid container style={{ justifyContent: "center", alignItems: "center" }}>
      <Typography style={{ ...TYPOGRAPHY, fontSize: 44, color: "#838383" }}>
        Select a stock
      </Typography>
    </Grid>
  );
}
