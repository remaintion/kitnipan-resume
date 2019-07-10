import React from "react"
import linkedin from "../images/icons/linkedin.svg"
import facebook from "../images/icons/facebook.svg"
import github from "../images/icons/github.svg"

const Footer = () => (
  <footer>
    <a
      href="https://www.linkedin.com/in/kitnipan-dermtoranin-222592b9"
      target="_blank"
    >
      <img src={linkedin} height="60" />
    </a>
    <a href="https://facebook.com/konggggg" target="_blank">
      <img src={facebook} height="60" />
    </a>
    <a href="https://github.com/remaintion" target="_blank">
      <img src={github} height="60" />
    </a>
  </footer>
)

export default Footer
