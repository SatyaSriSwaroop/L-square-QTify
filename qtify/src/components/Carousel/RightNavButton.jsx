// RightNavButton.js
import React from 'react';
import './RightNavButton.module.css';

const RightNavButton = () => (
    <button className="right-nav-button"  hidden>
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
);

export default RightNavButton;
