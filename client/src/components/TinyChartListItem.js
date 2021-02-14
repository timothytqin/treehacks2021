import React, { useState, useEffect } from "react";
import { AreaChart, Area } from "recharts";
import { getTransport } from "tone";

import { PRIMARY_COLOR } from "../style/css/globalStyles";

export default function TinyChartListItem(props) {
  const { data, color } = props;

  const getTimeSeriesData = (time_data) => {
    let tempData = [];
    for (const timestamp in time_data) {
      const newData = {};
      newData["time"] = new Date(timestamp).toLocaleDateString();
      newData["price"] = time_data[timestamp].closing_price;
      tempData.push(newData);
    }

    tempData = tempData.sort((a, b) => {
      return new Date(a.time) < new Date(b.time) ? -1 : 1;
    });
    return tempData;
  };

  return (
    <AreaChart width={80} height={40} data={getTimeSeriesData(data.time_data)}>
      <defs>
        <linearGradient id="green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={PRIMARY_COLOR} stopOpacity={0.8} />
          <stop offset="95%" stopColor={PRIMARY_COLOR} stopOpacity={0} />
        </linearGradient>
        <linearGradient id="red" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor={"#f00"} stopOpacity={0.8} />
          <stop offset="95%" stopColor={"#f00"} stopOpacity={0} />
        </linearGradient>
      </defs>
      <Area
        type="monotone"
        dataKey="price"
        stroke={color}
        fill={`url(#${color == PRIMARY_COLOR ? "green" : "red"})`}
        fillOpacity={1}
      />
    </AreaChart>
  );
}
