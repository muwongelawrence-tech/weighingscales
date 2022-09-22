import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCJ7jLtGlCaQpGcn9mm5uok3OTkFJer9_o",
  authDomain: "african-craft-shoes.firebaseapp.com",
  projectId: "african-craft-shoes",
  storageBucket: "african-craft-shoes.appspot.com",
  messagingSenderId: "835643324586",
  appId: "1:835643324586:web:df910fb9689d5624bb38d3"
};


//const firebaseApp = firebase.initializeApp(firebaseConfig);

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;
  
  // const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):
  // firebase.app();

  // const db = app.firestore();
  
  // export default db;




