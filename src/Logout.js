import React from "react";
import { Link } from 'react-router-dom';

function Logout() {
  return (
    <div>
      <h2>
        <Link to="/" style={{ textDecoration: 'none' }}>
          Logout
        </Link>
      </h2>
    </div>
  );
}

export default Logout;
