import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './LogIn.css';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';


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

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    // const handleSignInWithGoogle = () => {
    //     //console.log('clicking....');
    //     firebase.auth()
    //         .signInWithPopup(googleProvider)
    //         .then(res => {
    //             // The signed-in user info.
    //             var user = res.user;
    //             console.log("Sign in with google----",user);
    //             const isSignedInUser = {
    //                 isSignedInUser: true,
    //                 name: user.displayName,
    //                 email: user.email
    //             }
    //             setUser(isSignedInUser);
    //             const { displayName, email } = user;
    //             console.log(displayName, email);
    //         })
    //         .catch(error => {
    //             // Handle Errors here.
    //             var errorCode = error.code;
    //             var errorMessage = error.message;
    //             // The email of the user's account used.
    //             var email = error.email;
    //             // The firebase.auth.AuthCredential type that was used.
    //             var credential = error.credential;
    //             // ...
    //         });
    // }

    const handleSignInWithGoogle = () => {
        //console.log('clicking....');
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(res => {
                // The signed-in user info.
                const newUserInfo = { ...user};
                newUserInfo.error = '';
                newUserInfo.success = true;
                newUserInfo.name = res.user.displayName;
                newUserInfo.email = res.user.email;
                newUserInfo.isSignedInUser = true;
                updateUserName(user.name);
                setUser(newUserInfo);
                //var user = res.user;
                setLoggedInUser(newUserInfo);
                console.log("Sign in with google----",res.user);
                history.replace(from);
            })
            .catch(error => {
                const newUserInfo = { ...user };
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
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
        if (newUser && user.email && user.password) { // new user hole  sign up e niye jabe
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log("Open new account",res);
                    const newUserInfo = { ...user };
                    // newUserInfo.name = res.user.displayName;
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.isSignedInUser = true;
                    updateUserName(user.name);
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    console.log("Login in with email",res);
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    newUserInfo.name = res.user.displayName;
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });
        }

        event.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name
        }).then(()=> {
            // Update successful.
            console.log("User Name Updated Successfully");
        }).catch(error => {
            // An error happened.
            console.log(error);
        });

    }

    return (
        <div className="logInArea">
            {user.success && <h1>Welcome {user.name}</h1>}
            <div className="logInField">
                {newUser ? <h2>Create An Account</h2> : <h1>Log In</h1>}
                <form onSubmit={handleSubmit}>
                    {newUser && <input type="text" onBlur={handleBlur} name="name" id="" placeholder="Name" required />}
                    <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required />
                    <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required />
                    {newUser ? <input type="submit" value="Create an account" /> : <input type="submit" value="Log In" />}
                </form>
                {newUser ?
                    <h6 style={{ color: 'white', textAlign: 'center' }}>Already Have An Account? <span onClick={() => setNewUser(!newUser)}>login</span></h6>
                    : <h6 style={{ color: 'white', textAlign: 'center' }}>Don't Have An Account? <span onClick={() => setNewUser(!newUser)}>Create an account</span></h6>
                }

                { !user.success && user.error }
                {user.success && <h5>User {newUser ? 'Created Successfully' : 'Logged In'}</h5>}

            </div>

            <div className="anotherWaySignIn">
                <h5>__________Another way to sign in__________</h5>
                <button onClick={handleSignInWithGoogle}> <span><FontAwesomeIcon icon={faGoogle}/></span> Continue With Google</button>
            </div>
        </div>
    );
};

export default LogIn;