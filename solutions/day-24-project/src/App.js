import axios from "axios";
import React, { useEffect, useState } from "react";
import PopulaChart from "./components/ChartCountry/PopulaChart.jsx";
import CountryCard from "./components/CountryCard/CountryCard";
import FilterCountry from "./components/FilterCountry/FilterCountry";
import HeaderCountry from "./components/HeaderCountry/HeaderCountry";
const App = () => {
  const [data, setData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  useEffect(() => {
    FecthCountry();
  }, []);
  const FecthCountry = async () => {
    const URL = "https://restcountries.eu/rest/v2/all";
    const reponse = await axios.get(URL);
    const data = await reponse.data;
    setData(data);
    setRenderData(data);
  };
  const onFilterForm = (filterValue) => {
    const newData = data.filter((country) => {
      return (
        country.name.toUpperCase().includes(filterValue.toUpperCase()) ||
        country.capital.toUpperCase().includes(filterValue.toUpperCase())
      );
    });
    setRenderData(newData);
  };
  return (
    <div className="App">
      <HeaderCountry length={data.length} result={renderData.length} />
      <FilterCountry onFilterForm={onFilterForm} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "100px",
        }}
        className="country-wrapper"
      >
        {renderData.map((country) => {
          return <CountryCard country={country} />;
        })}
      </div>
      <PopulaChart worldData={data} filterData={renderData} />
    </div>
  );
};
export default App;
