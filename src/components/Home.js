import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ReactRevealText from "react-reveal-text/lib/ReactRevealText";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: true });
    }, 500);
  }
  render() {
    return (
      <div id="home-banner">
        <div id="banner-text">
          <ReactRevealText
            show={this.state.show}
            style={{
              fontSize: "2.5rem",
              color: "white",
              letterSpacing: ".2rem"
            }}
          >
            STEPHANIE LOUIE
          </ReactRevealText>
          <ReactRevealText
            show={this.state.show}
            style={{
              fontSize: "1.1rem",
              color: "black",
              marginTop: "-.3rem"
            }}
          >
            front end developer
          </ReactRevealText>
        </div>
        <div id="down-arrow">
          <h4>
            <AnchorLink href="#projects-container">
                <i class="fas fa-caret-down" />
            </AnchorLink>
          </h4>
        </div>
      </div>
    );
  }
}

export default Home;
