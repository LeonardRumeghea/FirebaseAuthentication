import {initializeApp} from 'firebase/app'

// Initializare Firebase
const app = initializeApp({
    apiKey: "AIzaSyDc8GTACXcWMILMmLk9-pUaWowtGHvPdo4",
    authDomain: "b5uberelectric-bacbb.firebaseapp.com",
    projectId: "b5uberelectric-bacbb",
    storageBucket: "b5uberelectric-bacbb.appspot.com",
    messagingSenderId: "1053866920657",
    appId: "1:1053866920657:web:1db10f617e6e7b639dd3f0"
});

//importam modulele javascript
var auth_signout = require('./auth_signout');
var auth_signup_password = require('./auth_signup_password');
var auth_signin_password = require('./auth_signin_password');
var auth_state_handler = require('./auth_state_handler');
var auth_verif_check = require('./auth_verif_check');
