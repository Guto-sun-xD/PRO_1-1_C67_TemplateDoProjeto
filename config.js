import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDhQeG5s0SyYrlpLAyymZJPbIFH69RdXYU",
  authDomain: "projeto67-1af98.firebaseapp.com",
  projectId: "projeto67-1af98",
  storageBucket: "projeto67-1af98.appspot.com",
  messagingSenderId: "130258196156",
  appId: "1:130258196156:web:86661c09018c24921b22b9"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();