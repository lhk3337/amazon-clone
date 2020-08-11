import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCvggxfBXvllzonGoijeo_BL9hm37EWS7M",
  authDomain: "clone-b2622.firebaseapp.com",
  databaseURL: "https://clone-b2622.firebaseio.com",
  projectId: "clone-b2622",
  storageBucket: "clone-b2622.appspot.com",
  messagingSenderId: "553440840614",
  appId: "1:553440840614:web:ec057bb8432c23aaccdd67",
  measurementId: "G-W55FYSVYPB",
});

const auth = firebase.auth();
export { auth };
