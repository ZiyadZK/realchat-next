import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBO22xicQ6nYXD6dAIbc0BcX71inbabm_I",
    authDomain: "realchat-next.firebaseapp.com",
    projectId: "realchat-next",
    storageBucket: "realchat-next.appspot.com",
    messagingSenderId: "1044568380516",
    appId: "1:1044568380516:web:2ddfd422c752d4d4d03b71",
    measurementId: "G-C20HYY144G"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);