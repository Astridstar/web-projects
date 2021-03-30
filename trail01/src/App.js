import "./styles/App.css";

import { useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

import Header from "./components/Header";
import SideNavigator from "./components/SideNavigator";
import Dashboard from "./components/Dashboard";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
}));

function App() {
  const theme = createMuiTheme();
  const classes = useStyles(theme);
  const [isSideNaviOpen, setSideNaviOpen] = useState(false);

  const toogleSideNavigator = () => {
    console.log("Toggle Side Navigator", isSideNaviOpen);
    setSideNaviOpen(!isSideNaviOpen);
  };

  return (
    <div className={classes.grow}>
      <Header
        currentTheme={theme}
        onToggleSideNavigator={toogleSideNavigator}
      />
      <SideNavigator currentTheme={theme} toToggleSideNavi={isSideNaviOpen} />
      <Dashboard currentTheme={theme} />
    </div>
  );
}

export default App;
