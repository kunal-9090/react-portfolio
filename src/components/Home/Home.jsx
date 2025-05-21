import React from 'react'
import './Home.css'
import developer from "../../assets/developer.png"
import { Typewriter } from 'react-simple-typewriter'
import {useGSAP} from "@gsap/react"
import gsap from "gsap"

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1",{
      y: 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line2",{
      y: 80,
      duration: 1,
      opacity: 0
    })
    tl1.from(".line3",{
      y: 80,
      duration: 1,
      opacity: 0
    })
    gsap.from(".righthome img",{
      x: 200,
      duration: 1,
      opacity: 0
    })
  })
  return (
    <div id='home'>
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1">I'M</div>
          <div className="line2">KUNAL PATTANAIK</div>
          <div className="line3">
            <Typewriter
              words={["WEB DEVELOPER", "UI/UX DESIGNER", "FRONTEND DEVELOPER", "WEB 3 LEARNER"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>
          <button>HIRE ME</button>
        </div>
      </div>
      <div className="righthome">
        <img src={developer} alt="" />
      </div>
    </div>
  )
}

export default Home
