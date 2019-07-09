import React from "react"
import skills from "../../data/skill.json"

const Skill = () => (
  <div className="skill--section">
    <h2>MY SKILLS</h2>
    <sub>(Order by expertise)</sub>
    <ol>
      {skills.map(skill => (
        <li key={skill.name}>
          <span>{skill.name}</span>
          <div>( {skill.level} )</div>
        </li>
      ))}
    </ol>
  </div>
)

export default Skill
