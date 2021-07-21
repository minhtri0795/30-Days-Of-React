import axios from "axios";
import React, { Component } from "react";
import CatHeader from "./components/CatHeader";
import CatDay19 from "./components/Day19CatParadise";
import CatDay20 from "./components/Day20CatParadise";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

const filterStyle = {
  display: "inline-block",
  margin: "20px 10px 0 10px",
  padding: "10px",
  border: "1px solid #000",
  cursor: "pointer",
};
class Filter extends Component {
  render() {
    const { data, filterCat, country, val } = this.props;
    return (
      <div
        onClick={() => {
          filterCat(data, country);
        }}
        style={filterStyle}
      >
        <span>
          {country} {`: `}
        </span>
        <strong>{val}</strong>
      </div>
    );
  }
}
class App extends Component {
  state = {
    data: [] /*Data thay đổi để render lại ảnh */,
    originData: [] /*Data gốc từ API không thay đổi*/,
  };

  componentDidMount() {
    this.getAPI();
  }
  getAPI = async () => {
    const url = "https://api.thecatapi.com/v1/breeds/";
    const response = await axios.get(url);
    const data = await response.data;
    this.setState({
      data: data,
      originData: data,
    });
  };
  averageWeight = () => {
    const weight = this.state.originData.reduce(
      (acc, { weight: { metric } }) => {
        const kg = (metric.split("-")[0] * 1 + metric.split("-")[1] * 1) / 2;
        return acc + kg;
      },
      0
    );
    return (weight / this.state.originData.length).toFixed(2);
  };
  averageLife = () => {
    const life = this.state.originData.reduce((acc, { life_span }) => {
      const year =
        (life_span.split("-")[0] * 1 + life_span.split("-")[1] * 1) / 2;
      return acc + year;
    }, 0);
    return (life / this.state.originData.length).toFixed(2);
  };
  originFormat = () => {
    let originFormat = this.state.originData.reduce((acc, { origin }) => {
      !acc[origin] ? (acc[origin] = 1) : (acc[origin] += 1);
      return acc;
    }, {});
    return originFormat;
  };
  filterCat = (dataInput, country) => {
    let filterData = dataInput.filter((cat) => {
      return cat.origin === country;
    });
    this.setState({ data: filterData });
  };
  render() {
    console.log(this.state.originData);
    return (
      <Router>
        <div className="App">
          <CatHeader
            data={this.state.originData}
            AverageWeight={this.averageWeight}
            AverageLife={this.averageLife}
          />
          <Switch>
            <Route path="/day19">
              {this.state.data.map((cat) => {
                return <CatDay19 data={cat} />;
              })}
            </Route>
            <Route path="/day20">
              <div>
                {Object.keys(this.originFormat()).map((country) => {
                  return (
                    <Filter
                      data={this.state.originData}
                      filterCat={this.filterCat}
                      country={country}
                      val={this.originFormat()[country]}
                    />
                  );
                })}
              </div>
              {this.state.data.map((cat) => (
                <CatDay20 cat={cat} />
              ))}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
