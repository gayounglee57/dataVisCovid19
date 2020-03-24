import React, {useState} from "react";
import ReactDOM from "react-dom";
import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import "./styles.css";

import MapChart from "./MapChart";

const useStyles = makeStyles({
  root: {
    color: 'rgb(255, 108, 82)',
  },
  markLabel: {
    color: 'rgb(192, 188, 196)',
  }
});

const marks = [
  {
    value: 33,
    label: 'February 2, 2020',
  },
  {
    value: 64,
    label: 'March 4, 2020',
  },
];

function App() {
  const classes = useStyles();
  const [day, setDay] = useState(33);

  const handleChange = (e, value) => {
    setDay(value); //typeof value is number
  }

  return (
    <div className="container">
      <p className="heading">Covid-19 confirmed cases by country</p>
      <div className="legend-container">
        <div className="legend-box"></div>
        <div className="legend-label">at least 5000 cases</div>
      </div>
      <div className="map-container">
        <MapChart day={day} />
      </div>
      <div className="slider-container">
        <Slider id="slider" onChange={handleChange} min={33} max={64} classes={{root: classes.root, markLabel: classes.markLabel}} marks={marks} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
