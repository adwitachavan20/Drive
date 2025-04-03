<<<<<<< HEAD
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayV3MsNEL_6YLUtuiFr-vc6YAhmFPQqs",
  authDomain: "drive-50824.firebaseapp.com",
  projectId: "drive-50824",
 // storageBucket: "drive-50824.appspot.com",
  messagingSenderId: "623791330923",
  appId: "1:623791330923:web:cba217fb6b632f9734432e",
  measurementId: "G-JDWML53KEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app); // ✅ Add Firebase Authentication

// ✅ Export app and analytics so they can be used elsewhere
export { app, auth, analytics };

=======
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAayV3MsNEL_6YLUtuiFr-vc6YAhmFPQqs",
  authDomain: "drive-50824.firebaseapp.com",
  projectId: "drive-50824",
 // storageBucket: "drive-50824.appspot.com",
  messagingSenderId: "623791330923",
  appId: "1:623791330923:web:cba217fb6b632f9734432e",
  measurementId: "G-JDWML53KEN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app); // ✅ Add Firebase Authentication

// ✅ Export app and analytics so they can be used elsewhere
export { app, auth, analytics };

>>>>>>> 459c3fd (Initial commit)
