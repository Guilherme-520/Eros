import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCjBm7GtXu9MKFpsoSVeonHmOcbNFJsaM8",
  authDomain: "eros-64221.firebaseapp.com",
  projectId: "eros-64221",
  storageBucket: "eros-64221.appspot.com",
  messagingSenderId: "299118586031",
  appId: "1:299118586031:web:5c06eec92f5b61c1758c5a"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
 