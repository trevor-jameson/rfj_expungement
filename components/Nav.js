import React, { Fragment, useContext } from "react";

// mui
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// context
import { CaseContext } from "../contexts/casecontroller";

const useStyles = makeStyles(theme => ({
  root: {
    color: "#320570",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: "100",
    display: "flex",
    flexDirection: "row"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: "#000000"
  },
  typography: {
    flexGrow: 1,
    margin: 0
  },
  button: {
    color: "#320570",
    flexGrow: 1
  }
}));

export default function NavBar(props) {
  const classes = useStyles();
  let value = useContext(CaseContext);

  return (
    <AppBar>
      <Toolbar>
        <CaseContext.Consumer>
          {value => {
            return (
              <div style={{ display: "flex", flexGrow: 3, padding: "0 2vw" }}>
                <Typography variant="h6" className={classes.title}>
                  <p>{value.caseData.evaluatorName}</p>
                </Typography>

                <Typography
                  variant="h6"
                  className={classes.status}
                  style={{ color: value.status.color }}
                >
                  <p>{value.status.text}</p>
                </Typography>
              </div>
            );
          }}
        </CaseContext.Consumer>

        <div style={{ display: "flex", flexGrow: 1 }}>
          <Button color="inherit" className={classes.button}>
            To Top
          </Button>

          <Button color="inherit" className={classes.button}>
            Reset Form
          </Button>

          <Button color="inherit" className={classes.button}>
            Save to PDF
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}
