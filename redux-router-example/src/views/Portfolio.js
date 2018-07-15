import React from "react";
import Link from 'redux-first-router-link';

const navLink = {
  backgroundColor: "green",
  padding: "1rem 2rem",
  margin: "1rem",
  color: "white",
  textDecoration: "none",
  fontWeight: "bold"
};

function About() {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>Here is my Portfolio</p>
      <Link style={navLink} to={{ type: 'TIMELINE' }}>Portfolio Timeline</Link>
    </div>
  );
}

export default About;
