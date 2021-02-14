import { useEffect, useState } from "react";

import { Grid, Typography } from "@material-ui/core";

import { TYPOGRAPHY, PRIMARY_COLOR } from "../style/css/globalStyles";
import { getCurrPrice, getPriceChange } from "../lib";

import TinyChartListItem from "./TinyChartListItem";
import { CallMerge } from "@material-ui/icons";

export default function ListItem(props) {
  const { ticker, name, score, data, onClick } = props;
  const styles = {
    background: {
      backgroundColor: "#F3F3F3",
      width: window.innerWidth * 0.25,
      borderBottom: "1px solid #D5D5D5",
    },
    score: {
      fontSize: 36,
    },
    name: {
      fontSize: 14,
      fontWeight: "bold",
    },
    fullName: {
      fontSize: 12,
      color: "#838383",
    },
  };

  return (
    <Grid
      container
      item
      style={styles.background}
      onClick={() => {
        onClick(ticker);
      }}
    >
      <Grid
        container
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Typography
          style={{
            ...TYPOGRAPHY,
            ...styles.score,
            color: score <= 50 ? "#f00" : score <= 70 ? "#fc0" : PRIMARY_COLOR,
          }}
        >
          {score}
        </Typography>
      </Grid>

      <Grid
        container
        style={{
          flex: 4,
          justifyContent: "center",
          alignItems: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography
          style={{
            ...TYPOGRAPHY,
            ...styles.name,
          }}
        >
          {ticker}
        </Typography>
        <Typography
          style={{
            ...TYPOGRAPHY,
            ...styles.fullName,
          }}
        >
          {name}
        </Typography>
      </Grid>

      <Grid
        container
        style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
      >
        {data && (
          <TinyChartListItem
            data={data}
            color={getPriceChange(data.time_data) > 0 ? PRIMARY_COLOR : "#f00"}
          />
        )}
      </Grid>

      <Grid
        container
        style={{
          flex: 1.5,
          justifyContent: "center",
          alignItems: "flex-end",
          flexDirection: "column",
          paddingRight: 15,
        }}
      >
        <Typography
          style={{
            ...TYPOGRAPHY,
            ...styles.name,
          }}
        >
          {getCurrPrice(data.time_data)}
        </Typography>
        <Grid
          container
          style={{
            backgroundColor:
              getPriceChange(data.time_data) > 0 ? PRIMARY_COLOR : "#f00",
            justifyContent: "center",
            width: 50,
            borderRadius: 5,
          }}
        >
          <Typography
            style={{
              ...TYPOGRAPHY,
              ...styles.fullName,
              color: "#ffffff",
            }}
          >
            {getPriceChange(data.time_data)}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}
