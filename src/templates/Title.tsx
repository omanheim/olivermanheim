import * as React from "react";
import classNames from "classnames";
import { CSSTransitionGroup } from "react-transition-group";
import "../styles/Title.scss";

interface Props {
  title: string;
  inverted?: boolean;
  hiddenOnDesktop?: boolean;
}

interface State {
  mounted: boolean;
}

export default class Title extends React.PureComponent<Props, State> {
  state: State = { mounted: false };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ mounted: true });
    });
  }

  render() {
    const { title, inverted, hiddenOnDesktop } = this.props;
    const { mounted } = this.state;

    return (
      <CSSTransitionGroup
        transitionName="Title__fade"
        transitionEnterTimeout={300}
        transitionLeaveTimeout={300}
      >
        {mounted && (
          <h1
            key={title}
            className={classNames("Title", {
              Title__inverted: inverted,
              "d-sm-none": hiddenOnDesktop,
            })}
          >
            {title}
          </h1>
        )}
      </CSSTransitionGroup>
    );
  }
}
