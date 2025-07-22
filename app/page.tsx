'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js';
    script.setAttribute('data-name', 'bmc-button');
    script.setAttribute('data-slug', 'yassin24');
    script.setAttribute('data-color', '#FFDD00');
    script.setAttribute('data-emoji', '');
    script.setAttribute('data-font', 'Cookie');
    script.setAttribute('data-text', 'Buy me a coffee');
    script.setAttribute('data-outline-color', '#000000');
    script.setAttribute('data-font-color', '#000000');
    script.setAttribute('data-coffee-color', '#ffffff');
    script.async = true;

    document.getElementById('bmc-button-container')?.appendChild(script);

    return () => {
      document.getElementById('bmc-button-container')?.removeChild(script);
    };
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen p-6">
      <div className="p-8 rounded-2xl w-full max-w-md text-center animate-fade-in">
        <h1 className="text-3xl font-bold mb-4">👋 Platform Under Development</h1>
        <p className="text-brown mb-6">
          I&apos;m building a place where <strong>makers and needers meet</strong>.
          Post your idea, find solutions, or build the next big thing.
        </p>

        {/* Buy Me a Coffee button placeholder */}
        <div id="bmc-button-container" className="my-4"></div>

        <p className="text-xs mt-6 text-brown/70">Made by someone who needed this.</p>
      </div>
    </main>
  );
}
