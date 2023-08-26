import React, { useState } from 'react';
import { app, firestore } from "../firebase_setup/firebase";
import { addDoc, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function UrlInputSection() {
  const [inputUrl, setInputUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleUrlChange = (event) => {
    setInputUrl(event.target.value);
  };

  const handleShortenClick = async () => {
    try {
      const db = firestore;
  
      const originalUrlDocRef = await addDoc(collection(db, 'original_urls'), {
        created_at: serverTimestamp(),
        url: inputUrl
        
      });
  
      const shortenedCode = generateShortenedCode(originalUrlDocRef.id);
      const shortenedUrlDocRef = doc(db, 'shortened_urls', shortenedCode);
  
      await setDoc(shortenedUrlDocRef, {
        original_url_ref: originalUrlDocRef
      });
  
      setShortenedUrl(`https://yourdomain.com/${shortenedCode}`);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };
  

  const generateShortenedCode = (id) => {
    // Your custom logic to generate shortened codes
    // For simplicity, you can use the document ID
    return id.substring(0, 6); // Using the first 6 characters of the ID
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(shortenedUrl);
    setCopied(true);
  };

  return (
    <div className="d-flex flex-column align-items-center vh-100" style={{ marginTop: '20vh' }}>
      <div className="text-center mb-4">
        <h4 className="h2 mb-0" style={{ color: 'white', fontFamily: 'Proximanova, sans-serif', fontSize: '40px' }}>Paste URL Here:</h4>
      </div>
      <input
        type="text"
        value={inputUrl}
        onChange={handleUrlChange}
        placeholder="Enter URL"
        className="form-control form-control-lg mb-3"
        style={{ maxWidth: '500px' }}
      />
      <button onClick={handleShortenClick} className="btn btn-primary btn-lg">
        Shorten URL
      </button>

      {shortenedUrl && (
        <div className="mt-4 text-center">
          <h4 className="h2 mb-3" style={{ color: 'white', fontFamily: 'Proximanova, sans-serif', fontSize: '40px' }}>Shortened URL:</h4>
          <input
            type="text"
            value={shortenedUrl}
            readOnly
            className="form-control form-control-lg mb-2"
          />
          <button
            onClick={handleCopyClick}
            className="btn btn-success btn-lg"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}
    </div>
  );
}
