import React, { Component } from "react";
import "./App.css";
import Viewer from "./Viewer";
import Blinker from "./assets/Blinker.png";
import Bg from "./assets/bg.jpg";
import baffle from "baffle";

import { Link } from "react-router-dom";

import { Card, Typography } from "antd";
const { Text, Title } = Typography;

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className="name__container">
          <span className="name baffle">Shruth</span>
          <span className="name i">i {'\n'}</span>
          <br />
          <span className="name baffle">Subraman</span>
          <span className="name i"> i</span>
        </div>
        <span className="subtext">Switched and Routed</span>
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
    return (
      <div className="App">
        {/* <Viewer /> */}
        <img alt="blinker" src={Bg} className="background" />
        <div className="menu__items">
          <div>
            <Title level={1}>Shruthi Subramani</Title>
          </div>
          <div className="menu__item resume">
            <img alt="blinker" src={Blinker} className="menu__blinker res" />
            <Text>
              <Link className="menu__link" to="/resume">
                {" "}
                Resume{" "}
              </Link>
            </Text>
          </div>
          <div>
            <img alt="blinker" src={Blinker} className="menu__blinker ques" />
            <Text>
              <Link className="menu__link" to="/questLog">
                {" "}
                Quest Log{" "}
              </Link>
            </Text>
          </div>
          <div>
            <img alt="blinker" src={Blinker} className="menu__blinker sub" />
            <Text>
              <Link className="menu__link" to="/subjectMatrix">
                Subject Matrix
              </Link>
            </Text>
          </div>
          <div>
            <img alt="blinker" src={Blinker} className="menu__blinker cert" />
            <Text>
              <Link className="menu__link" to="/certifications">
                Certifications
              </Link>
            </Text>
          </div>
          <div>
            <img src={Blinker} className="menu__blinker cont" />
            <Text>
              <Link className="menu__link" to="/contact">
                Contact
              </Link>
            </Text>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    let b = baffle(".baffle", {
      characters: "11110",
      speed: 150
    });

    let i = baffle(".subtext", {
      //characters: "... .-- .. - -.-. .... . -.. / .- -. -.. / .-. --- ..- - . -..",
      characters: "10",
      speed: 400
    });

    b.reveal(1000);
    //i.reveal(10000);
    i.start();
  }
}

export default App;
