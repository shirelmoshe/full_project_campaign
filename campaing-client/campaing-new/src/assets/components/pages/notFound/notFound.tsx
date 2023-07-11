import React from 'react';
import "./notFound.css"

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <p>Oops! Page not found.</p>
        <p>It seems like the page you are looking for does not exist.</p>
      </div>
    </div>
  );
}

export default NotFound;
