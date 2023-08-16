import React from 'react';

const style = {
  backgroundColor: '#000000',
  color: 'white',
  borderTop: '1px solid #E7E7E7',
  padding: '20px',
  alignItems: 'center',
  Position: 'fixed',
  left: '0',
  bottom: '0',
  height: '60px',
  width: '100%',
};

const phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
};

const Footer = () => {
  return (
    <div>
      <div style={phantom} />
      <div style={style} className="text-center">
        {' '}
        <span>🏗️🚧 THIS WEBSITE IS STILL UNDER CONSTRUCTION 🚧🏗️</span>
      </div>
    </div>
  );
};

export { Footer };
