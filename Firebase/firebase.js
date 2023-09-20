import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyBnsG6xaFmZHqQ9pGtrrgr0qYVVdji21X8',
  authDomain: 'auth-1f283.firebaseapp.com',
  projectId: 'auth-1f283',
  storageBucket: 'auth-1f283.appspot.com',
  messagingSenderId: '297336092069',
  appId: '1:297336092069:web:d9672e03abac053675244c',
  measurementId: 'G-64VTSJ5ML9',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
