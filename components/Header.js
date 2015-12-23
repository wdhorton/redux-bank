import React from 'react';
import { Link } from 'react-router';

export default () => {
  return (
    <header className="ui grid">
      <div className="computer tablet only row">
        <div style={{width: "100%"}} className="ui inverted menu navbar page grid">
          <Link to="/" className="brand item">Redux Bank</Link>
        </div>
      </div>
    </header>
  );
};
