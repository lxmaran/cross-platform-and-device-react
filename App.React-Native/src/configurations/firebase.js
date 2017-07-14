import * as firebase from 'firebase';

export const config = {
    apiKey: "AIzaSyBAx3tUy1xo9qV81UOUg0gWFMBB3LL5HcY",
    authDomain: "licenta-53d14.firebaseapp.com",
    databaseURL: "https://licenta-53d14.firebaseio.com",
    projectId: "licenta-53d14",
    storageBucket: "licenta-53d14.appspot.com",
    messagingSenderId: "106754055717"
};
firebase.initializeApp(config);

export default firebase;