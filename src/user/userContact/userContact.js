import React from "react";
import './userContact.css';

const UserContact = (props) => (
    <div className="user-contact">
       <li> <span>COMPANY</span> <p>{props.company}</p> </li> 
       <li> <span>EMAIL</span> <p>{props.email}</p> </li> 
       <li> <span>PHONE</span> <p>{props.phone}</p> </li> 
       <li> <span>WEBSITE</span> <p>{props.website}</p> </li> 
    </div>
)

export default UserContact;