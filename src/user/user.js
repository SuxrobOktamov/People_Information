import React from "react";
import UserLogo from "./userLogo/userLogo";
import UserContact from "./userContact/userContact";
import './user.css';

const User = (props) =>{
    return(
        <div className="user">
            <button 
                onClick={props.remove} 
                className="remove">Remove User</button>
            <UserLogo 
                img={props.img} 
                name={props.name} 
                surName={props.surName}
            />
            <UserContact 
                company={props.company} 
                email={props.email} 
                phone={props.phone}  
                website={props.website}
            />
        </div>
    )
}

export default User;