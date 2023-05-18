// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC2NieghRnBZahglUJ0ZVatBFP_HkLuQBA',
  authDomain: 'best-car-toys.firebaseapp.com',
  projectId: 'best-car-toys',
  storageBucket: 'best-car-toys.appspot.com',
  messagingSenderId: '574756104097',
  appId: '1:574756104097:web:93f850f5583bb775f38de0',
  measurementId: 'G-W9Z2NZK23E',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;