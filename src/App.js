import React, { Component } from 'react';
import './App.css';
import Viewer from './Viewer'
import Blinker from './assets/Blinker.png';
import Bg from './assets/bg.jpg';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Viewer /> */}
        <img src={Bg} className='background'/>
        <div className='menu__items'>
          <div>
              Shruthi Subramani
            </div>
            <div className='menu__item resume'>
                <img src={Blinker} className='menu__blinker res' />
                Resume
            </div>
            <div>
                <img src={Blinker} className='menu__blinker ques' />
                Quest Log
            </div>
            <div>
                <img src={Blinker} className='menu__blinker sub' />
                Subject Matrix
            </div>
            <div>
                <img src={Blinker} className='menu__blinker cert' />
                Certifications
            </div>
            <div>
                <img src={Blinker} className='menu__blinker cont' />
                Contact
            </div>
        </div>
      </div>
    );
  }
}

export default App;
