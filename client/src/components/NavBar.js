import React, { useEffect, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import Search from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";

export default function NavBar(props) {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <div style={{ width: "12em", backgroundColor: "#ff00ff" }} alt="AA" />
          <Typography>Application Name</Typography>
          <TextField
            id="input-with-icon-textfield"
            placeholder="Search"
            style={{ borderWidth: 1, marginLeft: "26em", width: "25em" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}
