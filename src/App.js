import "./styles.css";
import React, { useState } from "react";

const res = [
  { name: "India", value: "in", cities: ["madurai", "cbe"] },
  { name: "park", value: "pk", cities: ["karachi", "abvv"] },
  { name: "bangaldesh", value: "ba", cities: ["mumbai", "delhi"] }
];

export default function App() {
  const [city, setCity] = useState([]);
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    const citiesvalue = res.find((item, index) => {
      return item.name === e.target.value;
    });

    console.log(citiesvalue);
    setCity(citiesvalue.cities);
    setDisplay(true);
  };
  console.log(city, "oooo");

  return (
    <div className="App">
      <select onChange={(e) => handleChange(e)}>
        {res.map((item, id) => {
          return <option>{item.name}</option>;
        })}
      </select>
      {display && (
        <select>
          {city.map((item) => {
            return <option>{item}</option>;
          })}
        </select>
      )}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
