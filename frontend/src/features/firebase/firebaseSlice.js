import { createSlice } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD5SjYXFBwMhyrDCaePtIf8zxYoH9MhlAQ",
    authDomain: "sih-hackathon-a1a79.firebaseapp.com",
    projectId: "sih-hackathon-a1a79",
    databaseURL: "https://sih-hackathon-a1a79.firebaseio.com",
    storageBucket: "sih-hackathon-a1a79.appspot.com",
    messagingSenderId: "571675340645",
    appId: "1:571675340645:web:a466b9479066db14c0fb8c",
    measurementId: "G-Y1M51LZT42"
};

const app = initializeApp(firebaseConfig);
const db = new Firestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

const firebaseSlice = createSlice({
    name: "firebase",
    initialState: {
        app: app,
        analytics: analytics,
        storage: storage,
        db: db,
        auth: auth,
        user: null,
    },
    reducers: {
        loginFirebase: (state, {payload}) => {
            state.auth.signInWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    state.user = user;
                    console.log(user)
                }).catch(error => {
                    console.log(error);
                });
        },
        registerFirebase: (state, {payload}) => {
            state.auth.createUserWithEmailAndPassword(payload.email, payload.password)
                .then(user => {
                    state.user = user;
                    console.log(user)
                }).catch(error => {
                    console.log(error);
                });
        }
    }
})

export default firebaseSlice.reducer