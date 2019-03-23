import React from 'react';

const Logo = ({open, modalToggle}) => {
  if (open) {
    return (
      <div
        className='modal-wrapper-call-ftc'
        style={{
        display: open
          ? 'block'
          : 'none'
      }}>
        <div className='modal-call-ftc'>
          <div className='modal-header'>
            <a href='#' className='close-modal' onClick={modalToggle}>
              ×
            </a>
            <h2 className='modal-caption'>
              Please call the FTC and tell commissioners to break up Facebook!
            </h2>
          </div>
          <h3 className='phone-header'>
            Call Now:
          </h3>
          <h3 style={{
            textAlign: 'center'
          }}>
            <a href='tel:9199269388' className='phone-header'>
              919-926-9388
            </a>
          </h3>
          <p
            style={{
            textAlign: 'center',
            fontSize: '17px',
            padding: '10px'
          }}>
            We’ll connect you to FTC commissioners. You can use this script — just introduce
            yourself, be polite, and say:
          </p>
          <p
            style={{
            textAlign: 'center',
            fontSize: '16px',
            fontStyle: 'italic',
            padding: '15px',
            paddingBottom: '0px'
          }}>
            <em>
              "I'm calling to ask that the FTC pursue a breakup of Facebook, forcing them to
              sell off WhatsApp, Instagram, and Messenger. Even a big fine won’t be enough to
              change their ways. It’s time to restore democracy and competition to social
              media through strong antitrust action. Thank you."
            </em>
          </p>
        </div>
      </div>
    );
  } else {
    return <span/>;
  }
};

export default Logo;
