import React, { Component } from "react";
import ThemeButton from "./components/ThemeButton";
import "./App.sass";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: true,
    };
  }

  toggleTheme = () => {
    this.setState((prevState) => {
      // let result;
      if (prevState.theme === true) {
        return {
          theme: false,
        };
      } else {
        return {
          theme: true,
        };
      }
      /* prevState.theme === true ? (result = false) : (result = true);

      return {
        theme: { result },
      }; */
    });
  };

  render() {
    const test = "Change theme";
    const main = "main";

    let themeClass = "lightTheme";
    if (this.state.theme === false) {
      themeClass = "darkTheme";
    }

    return (
      <>
        <div className={main}>
          <div className={themeClass}>
            <p>{test}</p>
          </div>
        </div>
        <ThemeButton toggle={this.toggleTheme} theme={this.state.theme} />
      </>
    );
  }
}

export default App;
