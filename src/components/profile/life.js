import React, { useState } from "react"
import moment from "moment"
import data from "../../data/profile.json"
import formalEmail from "../../images/emails/formal.png"
import informalEmail from "../../images/emails/informal.png"

const Life = ({ className }) => {
  const [aged, setAged] = useState(
    moment(data.birthDate, "DD/MM/YYYY").format()
  )
  const [expires, setExpires] = useState("")

  const getduration = (a = moment(), b) => {
    const diff = a.diff(b)
    const duration = moment.duration(diff)
    return {
      years: duration.years(),
      months: duration.months(),
      days: duration.days(),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    }
  }
  setTimeout(() => {
    const aged = getduration(moment(), moment(data.birthDate, "DD/MM/YYYY"))
    const aged60At = moment("02/10/2052", "DD/MM/YYYY")
    const expires = getduration(aged60At, moment())

    const nextAged = Object.keys(aged)
      .map(key => `${aged[key]} ${key}`)
      .join(" ")
    setAged(nextAged)

    const nextExpires = Object.keys(expires)
      .map(key => `${expires[key]} ${key}`)
      .join(" ")
    setExpires(nextExpires)
  }, 1000)
  const { fullname, coolArea, email } = data
  return (
    <div className={className}>
      <h2>{fullname}</h2>
      <h3>{coolArea}</h3>
      <div className="email">
        <div>
          <b>For Work:</b>
          <img
            src={formalEmail}
            height="30"
            alt="devloper nodejs react redux email"
          />
        </div>
        <div>
          <b>For Spam:</b>{" "}
          <img
            src={informalEmail}
            height="30"
            alt="devloper nodejs react redux email golang django python express"
          />
        </div>
      </div>
      <p>Aged: {aged}</p>
      <p>Expires (I'll retires at 60 years old): {expires}</p>
      <p>I live in: Bangkok, Thailand</p>
    </div>
  )
}

export default Life
