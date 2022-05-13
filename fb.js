import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDy_q0xmJHCC95WdVV_35llxFJmTG6HB2s",
  authDomain: "fir-todo-674af.firebaseapp.com",
  projectId: "fir-todo-674af",
  storageBucket: "fir-todo-674af.appspot.com",
  messagingSenderId: "713968405105",
  appId: "1:713968405105:web:55c8aee0d3843bd4cde9d0",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
