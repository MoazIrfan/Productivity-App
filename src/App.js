import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';
import { Header } from './components/layout/Header';
import { Content } from './components/layout/Content';
import { Checkbox } from './components/Checkbox';

import { ProjectsProvider, SelectedProjectProvider } from './context';

export const App = () => {

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main 
          data-testid="application"
        >
          <Header />
          <Router>
            <Route exact path="/" component={Content} />
            <Route exact path="/task/:handle" component={Checkbox} />
          </Router>

          {/* <Content /> */}
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};

App.propTypes = {
  darkModeDefault: PropTypes.bool,
};
