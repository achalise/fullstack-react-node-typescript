import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation: React.FC<NavigationProps> = (props: NavigationProps) => {
  console.log(`The props passed in: `, props);
  const userLoggedIn = () => {
    return props.auth && props.auth.id && props.auth.id !== '' ? true : false;
  };
  console.log(`Is user logged in ? `, userLoggedIn());
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          My App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              {userLoggedIn() ? (
                <Link className="nav-link" to="/dashboard">
                  Dashboard
                </Link>
              ) : (
                <a className="nav-link" href="#">
                Log in
              </a>
              )}
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
function mapStateToProps({ auth }: { auth: { id: string } }) {
  return { auth };
}

export default connect(mapStateToProps)(Navigation);

interface NavigationProps {
  auth: { id: string };
  store?: any;
}
