import React from "react";
import './userLogo.css';
const UserLogo = (props) =>{

    return(
        <div className="user-logo"> 
            <div className="logo">
                <img src={props.img} alt='person-img'/>
            </div>
            <h3>{props.name}<br/><span>{props.surName}</span> </h3>
        </div>
    )

}

export default UserLogo;