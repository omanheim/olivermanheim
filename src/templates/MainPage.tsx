import * as React from "react";
import "../styles/MainPage.scss";
import Home from "./Home";
import NavBar, { Tab } from "./NavBar";
import Resume from "./Resume";
import About from "./About";

interface State {
  tab: Tab;
}

export default class MainPage extends React.PureComponent<{}, State> {
  state: State = {
    // Could be based on `window.location.pathname`
    tab: Tab.home,
  };

  handleSelectTab = (tab: Tab) => {
    this.setState({ tab });
  };

  render() {
    const { tab } = this.state;
    const inverted = tab === Tab.resume;

    return (
      <div className="MainPage">
        <NavBar
          selectedTab={tab}
          onSelectTab={this.handleSelectTab}
          inverted={inverted}
        />
        <Home visible={tab === Tab.home} />
        <Resume visible={tab === Tab.resume} />
        <About visible={tab === Tab.about} />
      </div>
    );
  }
}
