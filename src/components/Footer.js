import React, { useState, useEffect } from 'react';

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${showFooter ? 'visible' : ''}`}>
      <p><b>&copy;  {new Date().getFullYear()}</b>&nbsp; All rights reserved with Muhammad Usman</p>
    </div>
  );
}
