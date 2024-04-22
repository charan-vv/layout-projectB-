import React from 'react';
import backgroundImage from '../../assets/photo/Background.svg';


function MyComponent() {
    return (
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '100vh', // Adjust as needed
          width: '100%',   // Adjust as needed
        }}
      >
        {/* Your component content */}
      </div>
    );
  }
  
  export default MyComponent;
  