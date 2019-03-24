
import firebase from 'firebase';
// import 'firebase/auth';
// import 'firebase/database';

const Firebase = {
  provider: undefined,
  instance: undefined,
  init: () => {

    Firebase.provider = new firebase.auth.GoogleAuthProvider();
    const config = {
      apiKey: 'AIzaSyD4-X3eaYo2VU9KEZ3z-I5n2V3VYRZuNWo',
      authDomain: 'fluxdash-29d20.firebaseapp.com',
      databaseURL: 'https://fluxdash-29d20.firebaseio.com',
      projectId: 'fluxdash-29d20',
      storageBucket: 'fluxdash-29d20.appspot.com',
      messagingSenderId: '97045166552',
    };

    Firebase.instance = firebase.initializeApp(config);

    // return Firebase.instance.auth().getRedirectResult().then((res) => {

    //   console.log('user', res.user);
    //   return res.user;
    // }
    return new Promise((resolve) => {

      Firebase.instance.auth().onAuthStateChanged((user) => {
        console.log('firebase.currentuser', user);
        resolve(user);
      });
    });
  },

};

export default Firebase;
