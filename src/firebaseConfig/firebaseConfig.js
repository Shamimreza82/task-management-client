
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCVhxZnNSawC7wXHDJLUEBSnndGu_AslD0",
  authDomain: "task-management-643fc.firebaseapp.com",
  projectId: "task-management-643fc",
  storageBucket: "task-management-643fc.appspot.com",
  messagingSenderId: "1036643325671",
  appId: "1:1036643325671:web:1062b5d830b71e43c9b442"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth; 
