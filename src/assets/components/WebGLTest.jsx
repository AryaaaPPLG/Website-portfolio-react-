import React, { useEffect, useState } from 'react';

// Simple WebGL test component
const WebGLTest = () => {
  const [webglSupported, setWebglSupported] = useState(null);

  useEffect(() => {
    const checkWebGL = () => {
      try {
        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        setWebglSupported(!!gl);
      } catch (e) {
        setWebglSupported(false);
      }
    };
    checkWebGL();
  }, []);

  if (webglSupported === null) {
    return <div>Checking WebGL support...</div>;
  }

  return (
    <div>
      <h3>WebGL Support Test</h3>
      <p>Status: {webglSupported ? 'Supported ✅' : 'Not Supported ❌'}</p>
      {webglSupported ? (
        <p>Your browser supports WebGL and can run 3D graphics.</p>
      ) : (
        <p>Your browser does not support WebGL. The 3D lanyard demo will show a fallback.</p>
      )}
    </div>
  );
};

export default WebGLTest;