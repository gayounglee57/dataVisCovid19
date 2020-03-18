import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import "./styles.css";

import MapChart from "./MapChart";

const useStyles = makeStyles({
  root: {
    color: 'rgb(255, 108, 82)',
  }
});

function App() {
  const classes = useStyles();
  const [day, setDay] = useState(31);

  const handleChange = (e, value) => {
    setDay(value); //typeof value is number
  }

  return (
    <div className="container">
      <div className="map-container">
        <MapChart day={day} />
      </div>
      <div className="slider-container">
        <Slider id="slider" onChange={handleChange} min={31} max={64} classes={{root: classes.root}} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
