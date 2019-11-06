import React, { useEffect, ReactNode } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Dashboard } from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navigation from './Navigation';
import { Activities } from './activities/Activities';
import Activity from './Activity/Activity';

const App: React.FC<AppProps> = (props: AppProps) => {
  useEffect(() => {
    props.fetchUser('4');
    props.fetchUserAsync('9');
  });
  return (
    <BrowserRouter>
      <>
        <Navigation />
        <div className="container">
          <Route exact path="/" component={Activities} />
          <Route exact path="/activities" component={Activities} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/activity" component={Activity} />
        </div>
      </>
    </BrowserRouter>
  );
};

export default connect(
  null,
  actions,
)(App);

interface AppProps {
  fetchUser: (id: string) => {};
  fetchUserAsync: (id: string) => {};

  children?: ReactNode;
}
