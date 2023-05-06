import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
  const firebaseConfig = {
    apiKey: "AIzaSyD4NSn2ju6Ba5_NuKgxfE4oYwFALQnKZJU",
    authDomain: "projto71.firebaseapp.com",
    projectId: "projto71",
    storageBucket: "projto71.appspot.com",
    messagingSenderId: "75597550266",
    appId: "1:75597550266:web:150ce94f759b1ad641a883"
  };
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
