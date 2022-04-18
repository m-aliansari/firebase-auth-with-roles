// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-functions.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCCAUxFs4ORG1QR32fXd7boUN6ERqOmEVE",
    authDomain: "thegoodz2.firebaseapp.com",
    databaseURL: "https://thegoodz2-default-rtdb.firebaseio.com",
    projectId: "thegoodz2",
    storageBucket: "thegoodz2.appspot.com",
    messagingSenderId: "231356082944",
    appId: "1:231356082944:web:1d85a72d1364d77fe961e5",
    measurementId: "G-GVV83WL0NG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const functions = getFunctions(app)
connectFunctionsEmulator(functions, "localhost", 5001);
const someOnCallFunction = httpsCallable(functions, "someOnCallFunction")

window.addEventListener("DOMContentLoaded", e => {
    document.getElementById("signBtn").addEventListener('click', e => {
        signInWithEmailAndPassword(auth, "auth_user@gmail.com", "auth_user").then(user => console.log(user)).catch(err => console.log(err))
    })


    document.getElementById("signBtnAdmin").addEventListener('click', e => {
        signInWithEmailAndPassword(auth, "auth_admin@gmail.com", "auth_admin").then(user => console.log(user)).catch(err => console.log(err))
    })


    document.getElementById("signOut").addEventListener('click', e => {
        signOut(auth).then(() => console.log("Signed Out!!")).catch(err => console.log(err))
    })


    document.getElementById("function").addEventListener('click', e => {
        someOnCallFunction({data: "hello world"}).then(res => console.log(res)).catch(err => console.log(err))
    })
})