import * as React from "react";
import classNames from "classnames";
import Title from "./Title";
import "../styles/Home.scss";
import Underline from "./Underline";
import { primaryLight } from "../Style";

interface Props {
  visible: boolean;
}

interface State {
  delayed: boolean;
}

export default class Home extends React.PureComponent<Props, State> {
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
          className={classNames("Home__welcome", {
            Home__delayed: delayed,
          })}
        >
          <div>
            <div className="mb-3">
              <Underline borderColor={primaryLight} borderWidth={6} animated>
                <div>welcome!</div>
              </Underline>
            </div>
            i'm a software engineer and ux developer
            <br />
            based in san francisco, ca
          </div>
          <div className="mt-3">thanks for stopping by :)</div>
        </div>
        <Title title="oliver manheim" />
      </>
    ) : null;
  }
}
