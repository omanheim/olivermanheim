import * as React from "react";
import Title from "./Title";
import "../styles/Resume.scss";
import classNames from "classnames";
import { CSSTransitionGroup } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ResumeItem, resumeItems } from "../resume";
import { SyntheticEvent } from "react";
import { Swipeable } from "react-swipeable";
import pdf from "../files/resume.pdf";
import { blueDark } from "../Style";
import Underline from "./Underline";

interface Props {
  visible: boolean;
}

interface State {
  index: number;
  items: ResumeItem[];
  animatingClick: "up" | "down" | null;
}

export default class Resume extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      index: 0,
      items: resumeItems,
      animatingClick: null,
    };
  }
  upArrow = React.createRef<HTMLButtonElement>();
  downArrow = React.createRef<HTMLButtonElement>();

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowDown") {
        this.handleNavigateNext();
      } else if (e.code === "ArrowUp") {
        this.handleNavigatePrevious();
      }
    });
  }

  // Add one for default heading
  itemCount = () => this.state.items.length + 1;

  scrollingPaused = false;
  handleWheelScroll = (e: SyntheticEvent<HTMLDivElement, WheelEvent>) => {
    const { index } = this.state;
    e.preventDefault();
    if (!this.scrollingPaused) {
      const isNextDirection = e.nativeEvent.deltaY > 0;
      this.scrollingPaused = isNextDirection
        ? index < this.itemCount() - 1
        : index > 0;
      if (isNextDirection) {
        this.handleNavigateNext();
      } else {
        this.handleNavigatePrevious();
      }
      if (this.scrollingPaused) {
        // Disable scrolling briefly until scroll has fully ended to avoid multiple scrolls
        setTimeout(() => {
          this.scrollingPaused = false;
        }, 2000);
      }
    }
  };

  handleNavigatePrevious = () => {
    const { index } = this.state;
    if (index === 0) return;
    this.setState({ index: index - 1, animatingClick: "up" });
  };

  handleNavigateNext = () => {
    const { index } = this.state;
    if (index >= this.itemCount() - 1) return;
    this.setState({ index: index + 1, animatingClick: "down" });
  };

  render() {
    const { visible } = this.props;
    const { index, items, animatingClick } = this.state;
    const itemCount = this.itemCount();

    return (
      <>
        <CSSTransitionGroup
          transitionName="Resume__fade"
          transitionEnterTimeout={750}
          transitionLeaveTimeout={200}
        >
          {visible && (
            <Swipeable
              onSwipedUp={this.handleNavigateNext}
              onSwipedDown={this.handleNavigatePrevious}
            >
              <div key="Resume" onWheel={this.handleWheelScroll}>
                <div className="Resume">
                  <div className="Resume__buttons">
                    <div className="Resume__spacer" />
                    <div className="Resume__arrows mr-4">
                      <div className="Resume__upArrow">
                        <button
                          ref={this.upArrow}
                          onClick={this.handleNavigatePrevious}
                          className={classNames("Resume__arrow mb-2", {
                            Resume__arrowDisabled: index === 0,
                            Resume__arrowClicked: animatingClick === "up",
                          })}
                          onAnimationEnd={() =>
                            this.setState({ animatingClick: null })
                          }
                          disabled={index === 0}
                        >
                          <FontAwesomeIcon icon="long-arrow-alt-up" size="lg" />
                        </button>
                      </div>
                      <div className="Resume__downArrow">
                        <button
                          ref={this.downArrow}
                          onClick={this.handleNavigateNext}
                          className={classNames("Resume__arrow", {
                            Resume__arrowDisabled: index >= itemCount - 1,
                            Resume__arrowClicked: animatingClick === "down",
                          })}
                          onAnimationEnd={() =>
                            this.setState({ animatingClick: null })
                          }
                          disabled={index >= itemCount - 1}
                        >
                          <FontAwesomeIcon
                            icon="long-arrow-alt-down"
                            size="lg"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="Resume__line"></div>
                  <div
                    className="Resume__inner"
                    style={{ marginTop: -90 * index }}
                  >
                    <div className="Resume__spacer"></div>
                    <div
                      className={classNames("Resume__item", {
                        Resume__itemVisible: index === 0,
                      })}
                    >
                      <div className="Resume__dot" />
                      <div>
                        <div>
                          <span className="Resume__company d-none d-sm-block">
                            scroll to navigate
                          </span>
                          <span className="Resume__company d-sm-none">
                            swipe to navigate
                          </span>
                        </div>
                      </div>
                      <div className="Resume__subheading">
                        <span className="Resume__position">
                          or download a pdf below
                        </span>
                      </div>
                      <div className="mt-3">
                        <Underline borderColor={blueDark} hoverOnly>
                          <a
                            className="Resume__pdf"
                            href={pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            open link
                          </a>
                        </Underline>
                      </div>
                    </div>
                    {items.map((item, idx) => (
                      <div
                        key={item.key}
                        className={classNames("Resume__item", {
                          Resume__itemVisible: index === idx + 1,
                        })}
                      >
                        <div className="Resume__dot" />
                        <div className="mb-1">
                          <div>
                            <span className="Resume__company mr-2">
                              {item.company}
                            </span>
                            <span className="Resume__location">
                              {item.location}
                            </span>
                          </div>
                        </div>
                        <div className="Resume__subheading">
                          <span className="Resume__position">
                            {item.position}
                          </span>
                          <span className="mx-2 d-none d-sm-inline-block">
                            •
                          </span>
                          <span className="Resume__timeframe d-block d-sm-inline mt-1 mt-sm-0">
                            {item.timeframe}
                          </span>
                        </div>
                        <div className="Resume__description">
                          <ul>
                            {item.description.map((li) => (
                              <li>{li}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {items.map((item, idx) => {
                  return (
                    <div
                      className={classNames(
                        "Resume__image d-none d-sm-block",
                        `Resume__image-${item.key}`,
                        {
                          Resume__imageVisible: index === idx + 1,
                        }
                      )}
                    />
                  );
                })}
                <div
                  className={classNames("Resume__triangle", {
                    Resume__triangleTransparent: index > 0,
                  })}
                />
              </div>
            </Swipeable>
          )}
        </CSSTransitionGroup>
        {visible && <Title title="resume" hiddenOnDesktop={index > 0} />}
      </>
    );
  }
}
