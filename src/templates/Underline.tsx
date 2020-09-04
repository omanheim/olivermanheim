import * as React from "react";
import "../styles/Underline.scss";

interface Props {
  borderColor: string;
  borderWidth?: number;
  hoverOnly?: boolean;
  animated?: boolean;
}

interface State {
  underlined: boolean;
}

export default class Underline extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { underlined: !props.animated };
  }

  componentDidMount() {
    const { animated } = this.props;
    if (animated) {
      setTimeout(() => {
        this.setState({ underlined: true });
      }, 500);
    }
  }

  render() {
    const {
      animated,
      borderColor,
      borderWidth,
      hoverOnly,
      children,
    } = this.props;
    const { underlined } = this.state;

    return (
      <div>
        <div
          className="Underline"
          style={{
            borderBottomColor: borderColor,
            borderBottomWidth: borderWidth,
            maxWidth: underlined ? (hoverOnly ? undefined : 500) : 0,
            transitionDuration: animated ? "2.5s" : "0.4s",
            transitionTimingFunction: animated ? "ease-out" : undefined,
          }}
        >
          <div className="invisible">{children}</div>
          <div className="Underline__visible">{children}</div>
        </div>
      </div>
    );
  }
}
