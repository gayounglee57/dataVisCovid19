import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
  ComposableMap,
  Geographies,
  Geography,
  Sphere,
  Graticule
} from "react-simple-maps";
import Slider from '@material-ui/core/Slider';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
  .domain([1, 20000])
  .range(["#ffedea", "#ff5233"]);

const MapChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(`/covid_19_data_recent.csv`).then(data => {
      setData(data);
    });
  }, []);

  return (
    <ComposableMap
      projectionConfig={{
        rotate: [-10, 0, 0],
        scale: 147
      }}
    >
      <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
      <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
      {data.length > 0 && (
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            // geographies is array of all the countries from geojson url
            geographies.map(geo => {
              // data is array of all the rows in dataset
              const countryArray = data.filter(s => s["Country/Region"].includes(geo.properties.NAME) && s.ObservationDate === "2/02/20");
              const countrySum = countryArray.reduce((acc, current, index) => acc + parseInt(countryArray[index].Confirmed), 0);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={countrySum ? colorScale(countrySum) : "#F5F4F6"}
                />
              );
            })
          }
        </Geographies>
      )}
    </ComposableMap>
  );
};

export default MapChart;
