import React from 'react'

const Logo = ({open, modalToggle}) => {
   if (open) {
    return(
      <div
        className='modal-wrapper-call-ftc'
        style={{
        'display': open
          ? 'block'
          : 'none'
      }}>
        <div className='modal-call-ftc'>
          <a
            href="#"
            style={{
            'fontSize': '250%'
          }}
            onClick={modalToggle}>×</a>
          <header>
            <h2>Please call the FTC and tell commissioners to break up Facebook!</h2>
          </header>
          <h3 style={{
            'textAlign': 'center'
          }}>Call Now:</h3>
          <h3 style={{
            'textAlign': 'center'
          }}>919-926-9388</h3>
          <p style={{
            'textAlign': 'center'
          }}>We’ll connect you
            to FTC commissioners. You can use this script — just introduce yourself, be
            polite, and say:</p>
          <p style={{
            'textAlign': 'center'
          }}>
            <em>"I'm calling to ask that the FTC pursue a breakup of Facebook, forcing them
              to sell off WhatsApp, Instagram, and Messenger. Even a big fine won’t be enough
              to change their ways. It’s time to restore democracy and competition to social
              media through strong antitrust action. Thank you."
            </em>
          </p>
        </div>
      </div>
    )
   } else {
      return (<span></span>);
   }
}

export default Logo;