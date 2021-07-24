import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineBarChart } from "react-icons/ai";
import PopulaChart from "./components/ChartCountry/PopulaChart.jsx";
import CountryCard from "./components/CountryCard/CountryCard";
import FilterCountry from "./components/FilterCountry/FilterCountry";
import HeaderCountry from "./components/HeaderCountry/HeaderCountry";
import LangsChart from "./components/LangsChart/LangsChart.jsx";
const App = () => {
  const [data, setData] = useState([]);
  const [renderData, setRenderData] = useState([]);
  const [toggle, setToggle] = useState("population");
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
  const tooglePopula = () => {
    setToggle("population");
  };
  const toogleLangs = () => {
    setToggle("langs");
  };
  return (
    <div className="App">
      <HeaderCountry length={data.length} result={renderData.length} />
      <FilterCountry onFilterForm={onFilterForm} />
      <a className="view-chart" href="#chart">
        <AiOutlineBarChart />
        <span>View chart</span>
      </a>
      <div className="country-wrapper">
        {renderData.map((country) => {
          return <CountryCard country={country} />;
        })}
      </div>
      <div id="chart" className="chart-wrapper">
        <div className="chart-btn">
          <button onClick={tooglePopula} id="population">
            POPULATION
          </button>
          <button onClick={toogleLangs} id="language">
            LANGUAGE
          </button>
        </div>

        {toggle === "population" ? (
          <>
            <h4 className="chart-title">
              Top {renderData.length > 10 ? 10 : renderData.length} population
            </h4>
            <PopulaChart worldData={data} filterData={renderData} />
          </>
        ) : (
          <>
            <h4 className="chart-title">
              Top {renderData.length > 10 ? 10 : renderData.length} Language
            </h4>
            <LangsChart filterData={renderData} />
          </>
        )}
      </div>
    </div>
  );
};
export default App;
