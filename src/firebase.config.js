import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAwTyu3U_ih_IT1MCVSJDaMhs-45RwD9BU",
    authDomain: "sampleproject-595b2.firebaseapp.com",
    databaseURL: "https://sampleproject-595b2-default-rtdb.firebaseio.com",
    projectId: "sampleproject-595b2",
    storageBucket: "sampleproject-595b2.appspot.com",
    messagingSenderId: "25707130887",
    appId: "1:25707130887:web:390872fa4d39d5301f7aa2"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export { app, firestore, storage }