
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';

// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, set } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyBbWRF-zgGldpZ22BOniwwP2eEou_uNgmg",
//   authDomain: "my-web-site-cf9f1.firebaseapp.com",
//   databaseURL: "https://my-web-site-cf9f1-default-rtdb.firebaseio.com",
//   projectId: "my-web-site-cf9f1",
//   storageBucket: "my-web-site-cf9f1.appspot.com",
//   messagingSenderId: "250633038639",
//   appId: "1:250633038639:web:3721a768466f1abfd10fda",
//   measurementId: "G-XJLWPCBHQ7"
// };


// const app = initializeApp(firebaseConfig);

// function writeUserData(userId, name, email, imageUrl, phone, data, time, person){
//   const db = getDatabase();
//   const reference = ref(db, 'users/' + userId);

//   set(reference, {
//     username: name,
//     email: email,
//     phone: phone
//   });
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

