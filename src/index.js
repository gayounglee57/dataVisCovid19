import React from "react";
import ReactDOM from "react-dom";
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import "./styles.css";

import MapChart from "./MapChart";

const handleChange = () => {
  console.log("times are changing");
}

const useStyles = makeStyles({
  root: {
    color: 'rgb(255, 108, 82)',
  }
});

function App() {
  const classes = useStyles();

  return (
    <div className="container">
      <div className="map-container">
        <MapChart />
      </div>
      <div className="slider-container">
        <Slider id="slider" onChange={handleChange} classes={{root: classes.root}} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
