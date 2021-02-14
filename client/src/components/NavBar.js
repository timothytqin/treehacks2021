import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import { TYPOGRAPHY, PRIMARY_COLOR } from "../style/css/globalStyles";
import logo from "../style/assets/logo.png";

export default function NavBar(props) {
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        style={{
          backgroundColor: `${PRIMARY_COLOR}80`,

          height: window.innerHeight * 0.09,
          justifyContent: "center",
        }}
      >
        <Toolbar>
          <img
            style={{
              width: 120,
              height: "100%",
              marginRight: 10,
            }}
            src={logo}
            alt="Lorax"
          />
          {/* <Typography style={{ ...TYPOGRAPHY, fontSize: 36 }}>
            Lorax.ly
          </Typography> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
