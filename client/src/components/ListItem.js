import { useEffect, useState } from "react";

import { Grid, Typography } from "@material-ui/core";

import { TYPOGRAPHY, PRIMARY_COLOR } from "../globalStyles";

import TinyChartListItem from "./TinyChartListItem";


export default function ListItem(props) {

  const styles = {
    background: {
        backgroundColor: '#F3F3F3',
        width: window.innerWidth * 0.25,
        // border: 'solid',
        // borderColor: '#D5D5D5',
        // borderWidth: '0 0 1px',
        borderBottom: '1px solid #D5D5D5'
    },
    score: {
        fontSize: 36,
        color: PRIMARY_COLOR,
    },
    name: {
        fontSize: 14,
        fontWeight: "bold",
    },
    fullName: {
        fontSize: 12,
        color: '#838383',
    },
  };

  return (
    <Grid container item style={styles.background}>
        <Grid container style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
            <Typography           
                style={{
                ...TYPOGRAPHY,
                ...styles.score,
            }}>
                90
            </Typography>
        </Grid>
        
        <Grid container style={{flex: 4, justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}}>
            <Typography           
                style={{
                ...TYPOGRAPHY,
                ...styles.name,
            }}>
                Dow Jones
            </Typography>
            <Typography
                style={{
                ...TYPOGRAPHY,
                ...styles.fullName,
            }}>
                Dow Jones Industrial Average
            </Typography>
        </Grid>
        
        <Grid container style={{flex: 1.5, justifyContent: 'center', alignItems: 'center'}}>
            <TinyChartListItem/>
        </Grid>
        
        <Grid container style={{flex: 1.5, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'column', paddingRight: 15}}>
            <Typography           
                style={{
                ...TYPOGRAPHY,
                ...styles.name,

            }}>
                31,458.40
            </Typography>
            <Grid container style={{backgroundColor: PRIMARY_COLOR, justifyContent: 'center', width: 50, borderRadius: 5, }}>
                <Typography
                    style={{
                    ...TYPOGRAPHY,
                    ...styles.fullName,
                    color: '#ffffff'

                }}>
                    +27.7
                </Typography>             
            </Grid>
        </Grid>
        


    </Grid>
  );
}
