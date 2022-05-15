// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';




const firebaseConfig = {
    apiKey: "AIzaSyD8pRozKEHJPeMDG5Pa2ntNudFmhvy3nvg",
    authDomain: "enterjob-clone-yt.firebaseapp.com",
    projectId: "enterjob-clone-yt",
    storageBucket: "enterjob-clone-yt.appspot.com",
    messagingSenderId: "570672174930",
    appId: "1:570672174930:web:47217b082b5f59cfcd0c8b",
    measurementId: "G-6P9DZRCZ04"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  const auth =firebase.auth();

  export { db ,auth }