import * as React from "react";
import Title from "./Title";
import "../styles/About.scss";
import classNames from "classnames";
import Underline from "./Underline";
import { primaryLight } from "../Style";

interface Props {
  visible: boolean;
}

interface State {
  delayed: boolean;
}

export default class About extends React.PureComponent<Props> {
  state: State = { delayed: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ delayed: true });
    }, 200);
  }

  render() {
    const { visible } = this.props;
    const { delayed } = this.state;

    return visible ? (
      <>
        <div
          className={classNames("About", {
            About__delayed: delayed,
          })}
        >
          <Underline borderColor={primaryLight} borderWidth={6} animated>
            <div>Hi there!</div>
          </Underline>
          <div className="mt-3">
            My name's Oliver Manheim. I'm a software developer with over 6 years
            of professional experience building delightful user experiences and
            launching fast-growing consumer products.
          </div>
          <div className="mt-3">
            Currently, I'm working on building easy, smart, and collaborative
            tools for traveling at Wanderlog. I previously spent 4 years on the
            engineering and UX teams at YouTube, launching the YouTube Music app
            and prototyping the future of music streaming.
          </div>
          <div className="mt-3">
            I grew up in Evanston, IL, just north of Chicago, where I learned to
            love the beach and dread the winter. I went on to study at Penn,
            where I played in the symphony orchestra, co-hosted a weekly radio
            show, and hunted out the best food trucks in Philly.
          </div>
          <div className="mt-3">
            These days, I live in San Francisco with my partner. I can often be
            found playing volleyball at Ocean Beach, attending live shows at my
            favorite SF venues, scoping out the best vegan spots around the Bay,
            and aimlessly wandering the city to reach my ten thousand steps.
          </div>
          <div className="mt-3">
            Want to get in touch? Send me an{" "}
            <a
              className="About__link"
              href="mailto:omanheim@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              email
            </a>{" "}
            or connect with me on{" "}
            <a
              className="About__link"
              href="https://www.linkedin.com/in/omanheim/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            .
          </div>
          <div className="mt-3 small">
            PS. I built this site with React and Typescript.
          </div>
        </div>
        <Title title="about" />
      </>
    ) : null;
  }
}
