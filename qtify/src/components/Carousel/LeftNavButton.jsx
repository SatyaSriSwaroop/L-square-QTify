// LeftNavButton.js
import React from 'react';
import './LeftNavButton.module.css';

const LeftNavButton = () => (
    <button className="left-nav-button" hidden>
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
);

export default LeftNavButton;
