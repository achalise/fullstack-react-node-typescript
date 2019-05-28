import React, { useState } from 'react';
import { connect } from 'react-redux';
const Header: React.FC<HeaderProps> = (props) => {
  console.log(`The header props: `, props);

  return (
    <nav>
      <div className="nav-wrapper">
        {props.auth && props.auth.id && props.auth.id !== '' ? <div>User is logged in</div> : <div>User not logged in</div>}
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }: {auth: {id: string}} ) {
    console.log(`Mapping state `, auth);
  return { auth };
}

export default connect(mapStateToProps)(Header);


interface HeaderProps {
    auth: {id: string};
}