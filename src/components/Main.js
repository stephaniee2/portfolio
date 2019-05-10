import React, {Component} from 'react';
import { hot } from 'react-hot-loader/root';
import Home from './Home';
import Projects from './Projects';
import Tech from './Tech';
import About from './About';


class Main extends Component {
  render() {
    return (
      <div>
        <Home />
        <Projects />
        <Tech />
        <About />
      </div>
    );
  }
}

export default hot(Main);
