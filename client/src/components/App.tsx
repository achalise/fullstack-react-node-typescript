import React, { useEffect, ReactNode } from 'react';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
import { Landing } from './Landing';
import { Dashboard } from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';

const App: React.FC<AppProps> = (props: AppProps) => {
  useEffect(() => {
    props.fetchUser('4');
    props.fetchUserAsync('9');
  });
  return (
    <div className="container">
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </BrowserRouter>
    </div>
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
