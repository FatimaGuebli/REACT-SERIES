import React from "react";

const Footer = ({ length }) => {
  const today = new Date();
  return (
    <footer>
      <p>
        {length === 0
          ? "no items created yet"
          : length === 1
          ? `${length} item`
          : `${length} items`}
      </p>
    </footer>
  );
};

export default Footer;
