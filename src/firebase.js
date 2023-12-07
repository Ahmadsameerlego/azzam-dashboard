// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";

// import '../public/firebase-messaging-sw'

const firebaseConfig = {
    apiKey: "AIzaSyBVsQyEiEVFhJMat1XA79D0lr6ndrKvepI",
    authDomain: "azzam-client.firebaseapp.com",
    projectId: "azzam-client",
    storageBucket: "azzam-client.appspot.com",
    messagingSenderId: "1047643770667",
    appId: "1:1047643770667:web:c84cd70eabbb5c7979bf6e",
    measurementId: "G-L1PY7F28R0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const messaging = getMessaging(app);

// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', () => {
//     navigator.serviceWorker.register('../public/firebase-messaging-sw');
//   });
// }