import React, { Component } from "react"
import Life from "./life"
import Skill from "./skill"
import Experience from "./experience"

class Profile extends Component {
  render() {
    return (
      <div>
        <Life />
        <Skill />
        <Experience />
      </div>
    )
  }
}

export default Profile
