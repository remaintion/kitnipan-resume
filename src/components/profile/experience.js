import React from "react"
import moment from "moment"
import exp from "../../data/work.json"

const Experience = () => (
  <div className="exp--section">
    <h2>WORK EXPERIENCE</h2>
    <sub>( Order by time -1 )</sub>

    <div className="exp--wrapper">
      {exp.map(e => (
        <Workplace {...e} key={e.company} />
      ))}
    </div>
  </div>
)
class Workplace extends React.Component {
  state = {
    open: false,
  }
  toggle = () => this.setState({ open: !this.state.open })

  get duration() {
    let { start, end } = this.props
    if (end === "now") {
      end = moment()
    } else {
      end = moment(end, "DD/MM/YYYY")
    }
    start = moment(start, "DD/MM/YYYY")
    const diff = end.diff(start)
    const duration = moment.duration(diff)
    return `${duration.years()}Y ${duration.months()}M ${duration.days()}D`
  }
  render() {
    const {
      company,
      start,
      end,
      skills,
      responsibilities,
      position,
    } = this.props
    return (
      <div className="workplace">
        <h3 onClick={this.toggle}>{company}</h3>
        <div
          onClick={this.toggle}
          className={
            this.state.open
              ? "workplace--body active"
              : "workplace--body inactive"
          }
        >
          <p>
            Position: {position}
            <span className="right">
              ({start} - {end}) ({this.duration})
            </span>
          </p>

          <h4>Skill Set</h4>
          <ul>
            {skills.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <h4>Responsibility</h4>
          <ul>
            {responsibilities.map(t => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Experience
