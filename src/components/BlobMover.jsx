import React, { useEffect, useRef, useState } from 'react';
import './BlobMover.css';  // Import the CSS file

const BlobMover = () => {
  const blobRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  useEffect(() => {
    if (blobRef.current) {
      blobRef.current.style.left = `${position.x}px`;
      blobRef.current.style.top = `${position.y}px`;
    }
  }, [position]);

  return <div ref={blobRef} id="blob" />;
};

export default BlobMover;
