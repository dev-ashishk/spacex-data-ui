import React from "react";
import { renderRoutes } from "react-router-config";
import withStyles from "isomorphic-style-loader/withStyles";
import Routes from "./Routes";
import styles from "./scss/root.scss";

const App = () => (
    <React.Fragment>
        {renderRoutes(Routes)}
    </React.Fragment>
);

export default withStyles(styles)(App);
