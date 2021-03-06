import React from "react"
import linkedin from "../images/icons/linkedin.svg"
import facebook from "../images/icons/facebook.svg"
import github from "../images/icons/github.svg"

const Footer = () => (
  <footer>
    <a
      title="Linkedin kitnipan dermtoranin"
      href="https://www.linkedin.com/in/kitnipan-dermtoranin-222592b9"
      target="_blank"
    >
      <img src={linkedin} height="60" alt="linkedin kitnipan dermtoranin" />
    </a>
    <a
      title="Facebook kitnipan dermtoranin"
      href="https://facebook.com/konggggg"
      target="_blank"
    >
      <img src={facebook} height="60" alt="facebook kitnipan dermtoranin" />
    </a>
    <a
      title="Github kitnipan dermtoranin"
      href="https://github.com/remaintion"
      target="_blank"
    >
      <img src={github} height="60" alt="github kitnipan dermtoranin" />
    </a>
  </footer>
)

export default Footer
