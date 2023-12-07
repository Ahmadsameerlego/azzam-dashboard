
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);


const firebaseConfig = {
  apiKey: "AIzaSyBVsQyEiEVFhJMat1XA79D0lr6ndrKvepI",
  authDomain: "azzam-client.firebaseapp.com",
  projectId: "azzam-client",
  storageBucket: "azzam-client.appspot.com",
  messagingSenderId: "1047643770667",
  appId: "1:1047643770667:web:c84cd70eabbb5c7979bf6e",
  measurementId: "G-L1PY7F28R0"
};
    // eslint-disable-next-line
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  
  
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };



  self.registration.showNotification(notificationTitle, notificationOptions);

});
/* eslint-enable */