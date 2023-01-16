import React from "react";

function ContactsItemBody({ name, tag }){
    

    return(
        <div className="contact-item-body">
         <h3 className="contact-item-body-title">{name}</h3>
         <p className="contact-item-body-username">@{tag}</p>
        </div>
    )
}

export default ContactsItemBody;