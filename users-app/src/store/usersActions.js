export const addUser = (user) => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection('users')
        .add({...user, timestamp: getFirestore().FieldValue.serverTimestamp()})
        .then((doc) => {});
    };
}

export const deleteUser = (user_id) => {
    return (dispatch, stae, {getFirestore}) =>{
        getFirestore()
        .collection('users')
        .doc(user_id).delete().then(() =>{

        });
    };
    
};

export const editUser = (user_id, updated_info) => {
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection('users')
        .doc(user_id)
        .set(updated_info)
        .then(() =>{

        }) .catch((err) =>{

        });
    };
    
};   


export const getAllUsers = () =>{
    return (dispatch, state, {getFirestore}) => {
        getFirestore()
        .collection('users')
        .orderBy('timestamp', 'desc')
        .onSnapshot((snapshot) =>{
            let users = [];
            snapshot.forEach((doc) =>{
                users.push({...doc.data(), id: doc.id})
            })
            console.log(users)
            dispatch({
                type: "SET_ALL_USERS",
                payload: users
            })
        })
    }   
}

