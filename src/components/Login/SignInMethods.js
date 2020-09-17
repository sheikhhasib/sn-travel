import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";



export const initializeLoginFramework = () =>{
    if(firebase.apps.length === 0 ){
        firebase.initializeApp(firebaseConfig);
    }
}
//google sign in method
export const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider)
    .then(res => {
        const {displayName,email,photoURL} = res.user;
        const SignnedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true
          }
        return SignnedInUser;

      }).catch(function(error) {
        console.log(error);
        console.log(error.message);
      });
}
// Sign in with facebook 

export const handleFBSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(facebookProvider)
    .then((res)=> {
        const {displayName,email,photoURL} = res.user;
        const SignnedInUser = {
            isSignedIn: true,
            name: displayName,
            email: email,
            photo: photoURL,
            success: true
          }
          return SignnedInUser;
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        console.log(errorMessage);

      });
  }



//user name and password login
export const createSignInWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res =>{
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        updateUserName(name);
        console.log(newUserInfo);
      })
      .catch((error) => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo;
      });
}

export const signInwithEmailAndPassword = (email,password) =>{
    return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res =>{
        const newUserInfo = res.user;
        newUserInfo.error = '';
        newUserInfo.success = true;
        return newUserInfo;
        
      })
      .catch((error) => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return(newUserInfo);
      });
}

const updateUserName = name =>{
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
    }).then(() =>{
      console.log('user name updated successfully');
    }).catch(function(error) {
      console.log(error);
    });
  }