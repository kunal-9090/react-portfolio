import React from 'react'
import './About.css'
import Card from '../Card/Card'
import jwb from "../../assets/jwb.png"
import java from "../../assets/java.png"
import ui from "../../assets/ui.png"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

function About() {
  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });

    gsap.from(".line", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".line",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".aboutdetails h1", {
      x: -100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails h1",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".aboutdetails ul", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".aboutdetails ul",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
    gsap.from(".rightabout", {
      x: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".rightabout",
        scrub: 2,
        start: "top 60%",
        end: "top 30%"
      }
    });
  });

  return (
    <div id='about'>
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>
        <div className="aboutdetails">
          <div className="personalinfo">
            <h1>Personal Info</h1>
            <ul>
              <li>
                <span>NAME</span> : KUNAL KESHARI PATTANAIK
              </li>
              <li>
                <span>AGE</span> : 19 YEARS
              </li>
              <li>
                <span>GENDER</span> : MALE
              </li>
              <li>
                <span>LANGUAGE KNOWN</span> : ENGLISH, HINDI, ODIA
              </li>
            </ul>
          </div>
          <div className="education">
            <h1>Education</h1>
            <ul>
              <li>
                <span>DEGREE</span> : B.TECH
              </li>
              <li>
                <span>BRANCH</span> : COMPUTER SCIENCE & ENGINEERING
              </li>
              <li>
                <span>CGPA</span> : 9
              </li>
            </ul>
          </div>
          <div className="skills">
            <h1>Skills</h1>
            <ul>
              <li>
                JAVA & DSA
              </li>
              <li>
                JAVA FULL STACK WEB DEVELOPMENT
              </li>
              <li>
                UI/UX DESIGNING
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="rightabout">
        <Card title="JAVA FULL STACK WEB DEVELOPMENT" image={jwb}/>
        <Card title="JAVA & DSA" image={java}/>
        <Card title="UI/UX DESIGNING" image={ui}/>
      </div>
    </div>
  );
}

export default About;