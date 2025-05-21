import React from 'react'
import Card from "../Card/Card"
import './Projects.css'
import chess from "../../assets/chess.png"
import telegram from "../../assets/telegram.png"
import netflix from "../../assets/netflix.png"
import ecommerce from "../../assets/e-commerce.png"
import bms from "../../assets/bms.png"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import {ScrollTrigger} from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  useGSAP(()=>{
    gsap.from("#para", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: "#para",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    });
    gsap.from(".slider", {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
      scrollTrigger: {
        trigger: ".slider",
        scrub: 2,
        start: "top 80%",
        end: "top 30%"
      }
    });
  })
  return (
    <div id="projects">
        <h1 id='para'>2+ YEARS EXPERIENCED IN PROJECTS</h1>
        <div className="slider">
            <Card title="CHESS WEBSITE" image={chess}/>
            <Card title="TELEGRAM JOKES BOT" image={telegram}/>
            <Card title="NETFLIX CLONE" image={netflix}/>
            <Card title="E-COMMERCE WEBSITE" image={ecommerce}/>
            <Card title="BOOK MY SHOW CLONE" image={bms}/>
        </div>
    </div>
  )
}

export default Projects