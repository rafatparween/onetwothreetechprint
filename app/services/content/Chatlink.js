// import React from 'react';
// import './chatlink.css';

// const Chatlink = () => {
//   return (
//     <header className="header">
//       <div className="chat-now">
//         <div className="line-before"></div> {/* Horizontal line */}
//         <i className="fas fa-phone-square-alt" aria-hidden="true"></i>
//         <span>Chat Now</span>
//       </div>
//     </header>
//   );
// };

// export default Chatlink;



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
// import React from 'react';
// import './chatlink.css';

// const Chatlink = () => {
//   return (
//     <header className="header">
//       <div className="chat-now">
//         <div className="line-before"></div> {/* Horizontal line */}
//         <i className="fas fa-phone-square-alt" aria-hidden="true"></i>
//         <span>Chat Now</span>
//       </div>
//     </header>
//   );
// };

// export default Chatlink;


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
import './chatlink.css';

const Chatlink = () => {
  return (
    <header className="header">
      <div className="chat-now">
        <div className="line-before"></div>
        <FontAwesomeIcon icon={faPhoneSquareAlt} aria-hidden="true"  className='pr-[8px]'/>
        <span>Chat Now</span>
      </div>
    </header>
  );
};

export default Chatlink;


