//Creating an account

export const registerWithEmail = (email, password) => {
    return (dispatch, state, { getFirebase }) =>{
        let firebase = getFirebase();
        firebase
        .auth()
        .createUserWithEmailAndPassword(email, password) 
        .then((response)=>{
            console.log(response); 
        })
        .catch((err) =>{
            console.log(err);
        });
    };
};


//Logging in with email and password

export const loginWithEmail = (email, password) => {
    return (dispatch, state, { getFirebase }) =>{
        let firebase = getFirebase();
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password) 
        .then((response)=>{
            console.log(response); 
        })
        .catch((err) =>{
            console.log(err);
        });
    };
};


//Logging in with Google account

export const loginWithGoogle = () => {
    return (dispatch, state, { getFirebase }) =>{
        let firebase = getFirebase();
        let provider = new firebase.auth.GoogleAuthProvider();
        firebase
        .auth()
        .signInWithPopup(provider)
        .then ((res) =>{
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };
};


//Logging out 
export const logoutUser = () => {
    return (dispatch, state, {getFirebase}) => {
        let firebase = getFirebase();
        firebase
        .auth()
        .signOut()
        .then((response) =>{
            console.log(response);
        })
        .catch((err) =>{
            console.log(err);
        });
    }; 
};

