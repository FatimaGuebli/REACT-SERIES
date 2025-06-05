import React from "react";
import { Link } from "react-router-dom";
const Missing = () => {
  return (
    <main className="Missing">
      <h2>Page Not found</h2>
      <p>well that's disapointing</p>
      <p>
        <Link to="/">Visit our HomePage</Link>
      </p>
    </main>
  );
};

export default Missing;
