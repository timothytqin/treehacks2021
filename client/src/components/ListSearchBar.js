import { useEffect, useState } from "react";

import { Grid, Typography } from "@material-ui/core";

import { TYPOGRAPHY, PRIMARY_COLOR } from "../globalStyles";

import SearchIcon from '@material-ui/icons/Search';


export default function ListSearchBar(props) {

  const styles = {
    background: {
        backgroundColor: '#E4E4E4',
        width: window.innerWidth * 0.25,
        borderBottom: '2px solid #D5D5D5',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    searchBar: {
        backgroundColor: '#CCCDD1',
        // margin: '10%',
        borderBottom: '2px solid #D5D5D5',
        height: '50%',
        width: '94%',
        borderRadius: 10,
        alignItems: 'center'
    },
    icon: {
        padding: 8,
    },
    searchText: {
        fontSize: 18,
        color: '#838383',
        fontWeight: '300',
    }
  };

  return (
    <Grid container item style={styles.background}>
        <Grid container item style={styles.searchBar}>
            <SearchIcon style={styles.icon}/>
            <Typography
                style={{
                    ...TYPOGRAPHY,
                    ...styles.searchText,
                }}>
            Search for stock...
            </Typography>
        </Grid>
    </Grid>
  );
}
