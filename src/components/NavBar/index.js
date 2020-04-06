import React from 'react';
import NavBar from './NavBar';
import scrollToElement from 'scroll-to-element';

function navigateToHeaderByText(text) {
  for (const header of document.querySelectorAll('h2')) {
    if (header.textContent.toLowerCase().includes(text.toLowerCase())) {
      let target = header.parentElement;

      while (target.tagName !== "SECTION") {
        target = target.parentElement;
      }

      scrollToElement(target, { offset: -57 }); // about the height of the navbar.
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