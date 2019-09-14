import React from 'react';

const SocialIcons = props => {
  return (
    <ul className="flex justify-center">
      {
        props.social.map((social, index) => {
          return (
            <div className="mx-1" key={index}>
              <a href={social.url} target="_blank" rel="noopener noreferrer">
                <i className={`${social.icon} fa-lg`}></i>
              </a>
            </div>
          );
        })
      }
    </ul>
  );
}

export default SocialIcons;