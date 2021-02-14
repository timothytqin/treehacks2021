import { useEffect, useState } from "react";

import { Grid, Typography } from "@material-ui/core";

export default function Score(props) {
  const { score, label1, label2 } = props;
  const styles = {
    circle: {
      width: 70,
      height: 70,
      borderRadius: 50,
      backgroundColor: "#5BC096",
      alignItems: "center",
      justifyContent: "center",
    },
    typography: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: 18,
    },
    score: {
      fontSize: 36,
      color: "#ffffff",
    },
    label: {
      textAlign: "left",
    },
  };

  return (
    <Grid container style={{ alignItems: "center" }}>
      <Grid container style={{ ...styles.circle }}>
        <Typography
          style={{
            ...styles.typography,
            ...styles.score,
          }}
        >
          {score}
        </Typography>
      </Grid>
      <Grid style={{ marginLeft: 10 }}>
        <Typography style={{ ...styles.typography, ...styles.label }}>
          {label1}
        </Typography>
        <Typography style={{ ...styles.typography, ...styles.label }}>
          {label2}
        </Typography>
      </Grid>
    </Grid>
  );
}
