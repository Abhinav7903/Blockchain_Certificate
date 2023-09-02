import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, firestore, collection, getDocs, setDoc, doc, } from "./app.js";



//function to signup
function register(event) {
    event.preventDefault();
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        alert("User Registered Successfully");
        const docRef = doc(firestore, "users", user.uid);
        setDoc(docRef, {
            name: name,
            uid: user.uid
        });
        window.location.href = "#login-section";
        // ...
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            //..
        });
}
document.getElementById("signup-btn").addEventListener("click", register);


//function to login
function login(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            alert("User Logged In Successfully");
            window.location.href = "home.html";
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
}

document.getElementById("login-btn").addEventListener("click", login);

// 

