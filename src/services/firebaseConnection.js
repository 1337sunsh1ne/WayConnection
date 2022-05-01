import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';
let firebaseConfig = {
  apiKey: 'AIzaSyB6gsjldzrI0yhT2oWYSsbb3cVtWGIzrtY',
  authDomain: 'bdwayconnection.firebaseapp.com',
  projectId: 'bdwayconnection',
  storageBucket: 'bdwayconnection.appspot.com',
  messagingSenderId: '656624564690',
  appId: '1:656624564690:web:9c8214a3b98cd7126bf00b',
  measurementId: 'G-TCH1Y67S8S',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
