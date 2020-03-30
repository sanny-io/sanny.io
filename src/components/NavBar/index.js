import React from 'react';
import NavBar from './NavBar';
import scrollToElement from 'scroll-to-element';

function navigateToHeaderByText(text) {
  for (const header of document.querySelectorAll('h2')) {
    if (header.textContent.toLowerCase().includes(text.toLowerCase())) {
      scrollToElement(header, { offset: -100});
      return;
    }
  }
}

export default function () {
  return (
    <NavBar
      links={["Technologies", "Projects", "Experience", "About Me", "Contact Me"]}
      navigateTo={navigateToHeaderByText} />
  );
}