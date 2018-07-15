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
      <h2>Portfolio Timeline</h2>
      <p>I am a nested route!</p>
      <Link style={navLink} to={{ type: 'PORTFOLIO' }}>Back to Portfolio</Link>
    </div>
  );
}

export default About;
