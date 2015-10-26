import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  return (
    <div className="app">
      <div>
        <Link to="/page1">page1</Link>
        <Link to="/page2">page2</Link>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}
