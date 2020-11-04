import { v4 as uuid } from 'uuid';


const initialState = {
    users: [
      ]
};

const usersReducer = (state = initialState, action) =>{
  switch (action.type) {
    // Adding a user
    case "ADD_USER":
       const newUser = {
            id:uuid(),
            name: action.payload.name,
            email: action.payload.email,
            gen: action.payload.gen

        };
        return{...state,users:[...state.users, newUser]}
        // Deleting a user
           case 'DELETE_USER':
            const filteredUsers = state.users.filter(user => user.id !== action.payload);
            return {...state, users: filteredUsers}
            
            // Editing a user
            case "EDIT_USER": 
            const editedUsers = state.users.map(user => {
                if (user.id ===action.user_id){
                    return {...user, ...action.updated_info}
                }else {
                    return user;
                }
            });
                return {...state, users: editedUsers}
            case 'SET_ALL_USERS':
              return {users: action.payload}
            default:
            return state;
    }
}


export default usersReducer;