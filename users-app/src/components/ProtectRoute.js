import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

function ProtectRoute({component:Component, auth, ...rest}) {
    if(!auth.isLoaded) return null;
    if(auth.uid){
        return <Route {...rest} render={(props) =>{
            return <Component {...props}/>
         }}/>
    }
  
    return(
        <Route {...rest} render={(props) =>{
            return <Redirect to={{pathname:'/login'}}/>
        }}/>
    );
}

const mSTP = (state) =>{
    return {
        auth: state.firebase.auth
    };
};
export default connect(mSTP)(ProtectRoute); 
