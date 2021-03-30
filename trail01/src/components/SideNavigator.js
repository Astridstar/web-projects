import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Drawer } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hide: {
    display: "none",
  },
  drawer: {
    width: 200,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: 200,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
}));

const SideNavigator = ({ theme, toToggleSideNavi }) => {
  const classes = useStyles(theme);
  return (
    <nav>
      <Drawer
        variant="temporary"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: toToggleSideNavi,
          [classes.drawerClose]: !toToggleSideNavi,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: toToggleSideNavi,
            [classes.drawerClose]: !toToggleSideNavi,
          }),
        }}
      >
        <Button>Hello world</Button>
      </Drawer>
    </nav>
  );
};

export default SideNavigator;
