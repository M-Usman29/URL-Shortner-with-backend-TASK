import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBK7jQaWBdnuTUb7NUcweUe6NKvdU9OJ3k",
  authDomain: "url-shortner-with-backend.firebaseapp.com",
  projectId: "url-shortner-with-backend",
  storageBucket: "url-shortner-with-backend.appspot.com",
  messagingSenderId: "316623172154",
  appId: "1:316623172154:web:edad8625092b8009f67b03",
  measurementId: "G-G44XNB2XVM"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore };







