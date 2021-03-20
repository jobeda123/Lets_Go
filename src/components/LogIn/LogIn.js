import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './LogIn.css';


firebase.initializeApp(firebaseConfig);

const LogIn = () => {
    var googleProvider = new firebase.auth.GoogleAuthProvider();

    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedInUser: false,
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
    });

    const handleSignInWithGoogle = () => {
        //console.log('clicking....');
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                // The signed-in user info.
                var user = res.user;
                console.log(user);
                const isSignedInUser = {
                    isSignedInUser: true,
                    name: user.displayName,
                    email: user.email
                }
                setUser(isSignedInUser);
                const { displayName, email } = user;
                console.log(displayName, email);
            })
            .catch(error => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
    }

    const handleBlur = (event) => {
        console.log(event.target.name, event.target.value);
        let isFieldValid = true;
        if (event.target.name === 'email') {
            const isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }

        if (event.target.name === 'password') {
            const isFieldValid = /\d{1}/.test(event.target.value);
        }

        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (event) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log(res);
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success= false;
                    setUser(newUserInfo);
                });
        }

        event.preventDefault();
    }

    return (
        <div>
            <div className="logInField">
                { newUser ? <h2>Create An Account</h2>: <h1>Log In</h1> }
                <form onSubmit={handleSubmit}>
                    { newUser && <input type="text" onBlur={handleBlur} name="name" id="" placeholder="Name" required />}
                    <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required />
                    <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required />
                    {newUser ?<input type="submit" value="Create an account" />:<input type="submit" value="Log In" /> }
                </form>
                {newUser ?
                    <h6 style={{color: 'white', textAlign: 'center'}}>Already Have An Account? <span onClick={()=> setNewUser(!newUser)}>login</span></h6>
                    : <h6 style={{color: 'white', textAlign: 'center'}}>Don't Have An Account? <span onClick={()=> setNewUser(!newUser)}>Create an account</span></h6>
                }
                
                <h1>Error: {user.error}</h1>
                 {user.success && <h1>Yes Done</h1>}
                
            </div>
            <button onClick={handleSignInWithGoogle}>Sign In With Google</button>
        </div>
    );
};

export default LogIn;