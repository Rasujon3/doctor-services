import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAXKX58Cz4Hv1m5Xrt_HdWOVkdMK0_wed0",
  authDomain: "assignment-10-a91cb.firebaseapp.com",
  projectId: "assignment-10-a91cb",
  storageBucket: "assignment-10-a91cb.appspot.com",
  messagingSenderId: "421453432554",
  appId: "1:421453432554:web:1700f0727a90e33675b993",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
