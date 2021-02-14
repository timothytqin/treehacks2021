import logo from "./logo.svg";
import "./App.css";

import { useEffect, useState } from "react";

import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

import { firestore } from "./firebase/firebase";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let stockRef = firestore
      .collection("stocks")
      .doc("GME")
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
    console.log(data);
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="App">
      <AreaChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="time" type="number" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          fillOpacity={1}
          fill="url(#colorUv)"
        />
        {/* <Area
          type="monotone"
          dataKey="pv"
          stroke="#82ca9d"
          fillOpacity={1}
          fill="url(#colorPv)"
        /> */}
      </AreaChart>
    </div>
  );
}

export default App;
