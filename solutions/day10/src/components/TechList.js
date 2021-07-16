import React, { Component } from "react";
class TechList extends Component {
    render() {
      const techs = this.props.techs
      const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
      return techsFormatted
    }
  }
  export default TechList