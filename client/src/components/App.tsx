import React, { useEffect, ReactNode } from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Landing } from './Landing';
import { Dashboard } from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Navigation from './Navigation';

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
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
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
