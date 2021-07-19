import axios from "axios";
import React, { Component } from "react";
import loading from "./images/loading.svg";
class App extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    const url = "https://api.thecatapi.com/v1/breeds/";
    const response = await axios.get(url);
    const data = await response.data;
    this.setState({
      data,
    });
  }
  AverageWeight = () => {
    const weight = this.state.data.reduce((acc, { weight: { metric } }) => {
      const kg = (metric.split("-")[0] * 1 + metric.split("-")[1] * 1) / 2;
      return acc + kg;
    }, 0);
    return (weight / this.state.data.length).toFixed(3);
  };
  AverageLife = () => {
    const life = this.state.data.reduce((acc, { life_span }) => {
      const year =
        (life_span.split("-")[0] * 1 + life_span.split("-")[1] * 1) / 2;
      return acc + year;
    }, 0);
    return (life / this.state.data.length).toFixed(3);
  };
  topCountryCat = () => {
    const count = this.state.data.reduce((acc, { origin }) => {
      !acc[origin] ? (acc[origin] = 1) : (acc[origin] += 1);
      return acc;
    }, {});
    let TopCat = [];
    for (let key in count) {
      TopCat.push({ [key]: count[key] });
    }
    let sortTopCat = TopCat.sort((a, b) => {
      return Object.values(a) - Object.values(b);
    });
    return sortTopCat;
  };
  render() {
    return (
      <div className="App">
        <h1>30 days of react</h1>
        <h2>Cat paradise</h2>
        {this.state.data.length !== 0 ? (
          ""
        ) : (
          <>
            <img
              style={{ width: "100px", height: "100px" }}
              src={loading}
              alt="loading"
            ></img>
            <strong style={{ display: "block", margin: "-20px 0 30px 0" }}>
              Loading data, please wait...
            </strong>
          </>
        )}
        <p>
          There are <strong>{this.state.data.length}</strong> cat breeds
        </p>
        <p>
          On average weight cat is:{" "}
          <strong>
            {this.state.data.length !== 0 ? this.AverageWeight() : "loading..."}
          </strong>
          kg
        </p>
        <p>
          On average life is:{" "}
          <strong>
            {this.state.data.length !== 0 ? this.AverageLife() : "loading..."}
          </strong>
          year
        </p>
        <p>
          Many of country have cat breeds:{" "}
          <strong>
            {this.state.data.length !== 0
              ? new Set(this.state.data.map((cat) => cat.origin)).size
              : "loading..."}
          </strong>
          country.
        </p>
        <p>
          Country have hightest cat is:{" "}
          <strong>
            {this.state.data.length !== 0
              ? Object.keys(this.topCountryCat().pop()) +
                ` with ` +
                Object.values(this.topCountryCat().pop()) +
                ` `
              : "loading..."}
          </strong>
          breeds cat.
        </p>
        <p>Sort country cat by ascending: </p>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {this.state.data.length !== 0
            ? this.topCountryCat().map((country) => {
                return (
                  <li style={{ display: "flex" }} key={Object.keys(country)}>
                    <strong
                      style={{
                        display: "block",
                        width: "180px",
                        textAlign: "left",
                      }}
                    >
                      {Object.keys(country)}:{" "}
                    </strong>
                    <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                      {Object.values(country)}
                    </span>
                  </li>
                );
              })
            : "loading..."}
        </ul>
      </div>
    );
  }
}
export default App;
