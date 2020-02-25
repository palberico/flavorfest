import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
      apiKey: "AIzaSyDVMQXouXR3ep0hn42FdPNjENUFZLghFiM",
      authDomain: "flavorfest-95c80.firebaseapp.com",
      databaseURL: "https://flavorfest-95c80.firebaseio.com",
      projectId: "flavorfest-95c80",
      storageBucket: "",
      messagingSenderId: "1065564206373",
      appId: "1:1065564206373:web:1eb378cba344b8c567d6cc",
      measurementId: "G-GB1PVKZHNB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();

    export const auth = firebase.auth();

export default firebase;