import React, { Component } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { addUser, deleteUser, getAllUsers } from "./store/usersActions";
import { logoutUser} from './store/authActions';
import UsersForm from "./components/UsersForm";
import UsersInfo from "./components/UsersInfo";

 
export class App extends Component {
    addNewUser = newUser => {
    this.props.addUser(newUser)
  };

  deleteUser = (user_id) => {
    this.props.deleteUser(user_id);
  };

  componentDidMount(){
      this.props.getAllUsers();
}

render(){
  return(
    <div className="App">
         {/* <h1>FOOTBALLERS DADABASE</h1>*/}
        <div className="logout-div">
          
          <button onClick={this.props.logoutUser}>Logout</button>
        
        </div>
        <div className="add_user"><UsersForm addUser = {this.addNewUser}/></div>
        <deleteUser removeUser = {this.removeUser} />
  
      <div className="App_user-info">
      {this.props.users.map((item, index) => {
               return (
                <UsersInfo
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  email={item.email}
                  gen={item.gen}
                  removeUser={this.deleteUser}
                    />
          );
        })}
        </div>
      </div>
        );
      }
      }

      const mapStateToProps = (state) =>{ 
        console.log(state)
        return{
        users: state.usersState.users,
      };}
      const mapDispatchToProps = {
        addUser,
        deleteUser,
        getAllUsers,
        logoutUser ,
      
      };
export default connect(mapStateToProps, mapDispatchToProps) (App)