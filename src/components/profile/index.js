import React, { Component } from "react"
import Life from "./life"
import Skill from "./skill"
import Experience from "./experience"
import "./styles/theme.scss"

class Profile extends Component {
  state = {
    className: "theme--react270",
  }
  loadClassName(className) {
    this.setState({ className })
  }
  render() {
    return (
      <div className={this.state.className}>
        <button onClick={() => this.loadClassName("theme--normal")}>
          NORMAL THEME (DIFFICULT TO READ?)
        </button>
        <button onClick={() => this.loadClassName("theme--react270")}>
          REACT270 THEME
        </button>
        <Life />
        <Skill />
        <Experience />
      </div>
    )
  }
}

export default Profile
