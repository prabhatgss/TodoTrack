import { initializeApp } from 'firebase/app';
import { getAuth,signInWithEmailAndPassword} from 'firebase/auth'; // If you need authentication
import { getFirestore } from 'firebase/firestore'; // If you need Firestore
import { getStorage} from 'firebase/storage'; // If you need Firestore

const firebaseConfig = {
    apiKey: "AIzaSyCYbicavliOIP0v-I3roZu4zFSgirByY_A",
    authDomain: "todo-app-f0dc1.firebaseapp.com",
    projectId: "todo-app-f0dc1",
    storageBucket: "todo-app-f0dc1.appspot.com",
    messagingSenderId: "837228679521",
    appId: "1:837228679521:web:e61b4e3663e53c76f8b520",
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Export authentication if needed
export const firestore = getFirestore(app); 
export const storage = getStorage(app);