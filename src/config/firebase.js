import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBnjUR0NjpUUEKCYwrtS1hlsFr4Cs-Mmhs",
    authDomain: "hrm-dev-bb36e.firebaseapp.com",
    databaseURL: "https://hrm-dev-bb36e.firebaseio.com",
    storageBucket: "ichlernedeutch-85318.appspot.com",
};

firebase.initializeApp(config);

export const database = firebase.database();

