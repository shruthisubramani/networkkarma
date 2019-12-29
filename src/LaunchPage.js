import React, { Component } from "react";
import Viewer from "./Viewer";
import baffle from "baffle";

import { Link } from "react-router-dom";
import { Card, Typography } from "antd";
const { Text, Title } = Typography;

class LaunchPage extends Component {
  render() {
    return (
      <div className='App'>
        <div className="name__container">
          <span className="name baffle">ShruthiSubramani</span>
        </div>
        <span className="zerosAndOnes subtext">010101011101010010</span>
        <Link to='/home'>
          <img src="http://wildlifeobservationsworldwide.com/wp-content/uploads/2017/09/arrow_down_white_round.png" className="arrow" id="arrow"/>
        </Link>
        <div className="menu">
          {/* <span className="menu__item">Resume</span>
          <span className="menu__item">Subject Matrix</span>
          <span className="menu__item">Certifications</span>
          <span className="menu__item">Contact</span> */}
        </div>
        {/* <h2 className='name baffle'>hruthi</h2>
        <h1 className='firstChar baffle'>{` S `}</h1>
        <h2 className='name baffle'> ubramani </h2> */}
        {/* <img alt="blinker"  src={'https://images.squarespace-cdn.com/content/v1/5005bb9de4b0d377efbfbb3c/1382124700479-WG5KJ76YYZYPISVB1OPA/ke17ZwdGBToddI8pDm48kL7EH_j_UE7FkxByrlFBFf1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIIS5a6RhufqJKFkfDsmAjsRtFd81R0GoeFFt7qLzE68cKMshLAGzx4R3EDFOm1kBS/CAIRO-PATTERN.jpg?format=2500w'} className='background'/> */}
      </div>
    );
  }

  componentDidMount() {
    let b = baffle(".baffle", {
      characters: "11110",
      speed: 150
    });

    let i = baffle(".zerosAndOnes", {
      //characters: "... .-- .. - -.-. .... . -.. / .- -. -.. / .-. --- ..- - . -..",
      characters: "10",
      speed: 400
    });

    b.reveal(1000);
    //i.reveal(10000);
    i.start();
  }
}

export default LaunchPage;
