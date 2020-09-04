import * as React from "react";
import classNames from "classnames";
import "../styles/NavBar.scss";

export enum Tab {
  home = "home",
  resume = "resume",
  about = "about",
}

interface Props {
  selectedTab: Tab;
  onSelectTab: (tab: Tab) => unknown;

  /** Inverts the color scheme of the navbar */
  inverted?: boolean;
}

const tabs = [Tab.home, Tab.resume, Tab.about];

export default class NavBar extends React.PureComponent<Props> {
  render() {
    const { selectedTab, onSelectTab, inverted } = this.props;

    return (
      <div
        className={classNames("NavBar", {
          NavBar__inverted: inverted,
        })}
      >
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onSelectTab(tab)}
            className={classNames("NavBar__nav", {
              NavBar__selected: selectedTab === tab,
            })}
          >
            {tab}
          </button>
        ))}
      </div>
    );
  }
}
