import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TYPOGRAPHY, PRIMARY_COLOR } from "../style/css/globalStyles";

export default function NavBar(props) {
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        style={{
          backgroundColor: PRIMARY_COLOR,
          height: window.innerHeight * 0.08,
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <div
            style={{
              width: 70,
              height: "100%",
              backgroundColor: "#ff00ff",
              marginRight: 10,
            }}
            alt="AA"
          />
          <Typography style={{ ...TYPOGRAPHY, fontSize: 36 }}>
            Lorax.ly
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
