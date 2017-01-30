// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import styles from './style.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
      return (<MuiThemeProvider>

      <div className={styles.main}>
        <Helmet
              link={[
                  {
                      rel: 'icon', href: '/favicon.png',
                  },
                  {
                      "rel": "stylesheet",
                      "href": "//fonts.googleapis.com/icon?family=Material+Icons",
                      "type": "text/css"
                  }
              ]}
        />
        <Navbar />
        { this.props.children }
        <Footer />
      </div>
              </MuiThemeProvider>
    );
  }
}
