import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDSgNMJkGh7BR07fnjYdETqGYrlmMkgBBk",
  authDomain: "netflix-a9946.firebaseapp.com",
  projectId: "netflix-a9946",
  storageBucket: "netflix-a9946.appspot.com",
  messagingSenderId: "1027269919955",
  appId: "1:1027269919955:web:2bdedcf085c1d5f3328026",
  measurementId: "G-V2DYCRBVLR"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;