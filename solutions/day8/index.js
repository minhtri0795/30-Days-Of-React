import React, { Component } from "react";
import reactDom from "react-dom";
import ReactDOM from "react-dom";
import asabenehImage from "./images/avatar.jpg";
const UserCard = ({ user: { firstName, lastName, image } }) => {
  return (
    <div className="user-card">
      <img src={image} alt={firstName} />
      <h2>
        {firstName}
        {lastName}
      </h2>
    </div>
  );
};

class Button extends React.Component {
  render() {
    const { text, onClick, style } = this.props;
    return (
      <button style={style} onClick={onClick}>
        {text}
      </button>
    );
  }
}
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data;
    return (
      <header style={this.props.styles}>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

const Count = ({ count, add1, minus1 }) => {
  return (
    <div>
      <h1>{count}</h1>
      <div>
        <Button text="+1" onClick={add1} style={buttonStyles} />
        <Button text="-1" onClick={minus1} style={buttonStyles} />
      </div>
    </div>
  );
};
class TechList extends React.Component {
  render() {
    const techs = this.props.techs;
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>);
    return techsFormatted;
  }
}
class Countries extends React.Component {
  getRandom = ()=>{
    let randomNum = Math.floor(Math.random()*this.props.countries.length)
    let country = this.props.countries[randomNum]
    this.setState({country})
  }
  render (){
   
    return (
      <div className='countries'>
        <span>{this.country.name}</span>
        <p>{this.country.id}</p>
        <Button text='select country' onClick={this.getRandom}/>
      </div>
    )
  }
}
class Main extends React.Component {
  render() {
    const {
      user,
      techs,
      handleTime,
      greetPeople,
      add1,
      minus1,
      count,
      changeBackground,
    } = this.props;
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequisite to get started react.js:</p>
          <UserCard user={user} />
          <ul>
            <TechList techs={techs} />
          </ul>
          <Button
            text={"show date"}
            onClick={handleTime}
            style={buttonStyles}
          />
          <Button text={"Greet!"} onClick={greetPeople} style={buttonStyles} />
          <Button
            text={"Change background!"}
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} add1={add1} minus1={minus1} />
        </div>
      </main>
    );
  }
}
class Country extends React.Component {
  state = {
    name:'Viet Nam',
    capital:'Ha Noi',
    population: '92700000',
    flag: "https://restcountries.eu/data/vnm.svg",
  }
  getCountries = (callback)=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(function (response) {
      return response.json();
    })
    .then(callback)
  }
  
  getRandom = ()=>{
    this.getCountries((data)=>{
      let newObj = {}
      let list =[]
      data.forEach((country)=>{
        let {name,capital,population,flag} = country
        newObj = {name,capital,population,flag}
        list.push(newObj)
      })
      let random = Math.floor(Math.random()* data.length)
      let Obj = list[random]
      let {name,capital,population,flag} = Obj
      this.setState({name,capital,population,flag})
    })
  }
  render () {
    let {name,capital,population,flag}=this.state
    return (
     <div className ='countries'>
      <img src={flag} alt='flag'></img>
      <h1>{name}</h1>
      <p>Capital: {capital}</p>
      <p>Population: {population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
      <Button text='Select country' onClick={this.getRandom} style={buttonStyles}/>
     </div>
    )
  }
}
class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <p>Copyright {this.props.date.getFullYear()}</p>
      </footer>
    );
  }
}
class App extends React.Component {
  state = {
    count: 0,
    isDarkMode: "false",
  };
  changeBackground = () => {
    const body = document.querySelector("body");
    let isDarkMode =
      this.state.isDarkMode === "true" ? "false" : "true";
    this.setState({ isDarkMode });
    isDarkMode === "true"
      ? body.classList.add("dark-mode")
      : body.classList.remove("dark-mode");
  };
  showDate = (time) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[time.getMonth()].slice(0, 3);
    const year = time.getFullYear();
    const date = time.getDate();
    return ` ${month} ${date}, ${year}`;
  };
  handleTime = () => {
    alert(this.showDate(new Date()));
  };
  greetPeople = () => {
    alert("xin chào bạn!");
  };
  add1 = () => {
    let count = this.state.count + 1;
    this.setState({ count });
  };
  minus1 = () => {
    this.setState({ count: this.state.count - 1 });
  };
  
  render() {
    const data = {
      welcome: "Welcome to 30 Days Of React",
      title: "Getting Started React",
      subtitle: "JavaScript Library",
      author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
      },
      date: "Oct 7, 2020",
    };
    const user = {
      ...data.author,
      image: asabenehImage,
    };
    const techs = ["HTML", "CSS", "JAVASCRIPT"];
    const date = new Date();
    return (
      <div className="App">
        <Header data={data} />
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          add1={this.add1}
          minus1={this.minus1}
          count={this.state.count}
          changeBackground={this.changeBackground}
        />
        <Country/>
        <Footer date={date} />
      </div>
    );
  }
}
ReactDOM.render(<App/>, document.getElementById("root"));
