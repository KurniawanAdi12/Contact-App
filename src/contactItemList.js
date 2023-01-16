import React from "react";
import ContactItem from './ContactItem.js';


function ContactList({ contact }){
    return(
        <div className="contact-list">
            {
                contact.map((contact) =>(
                    <ContactItem key={contact.id} {...contact}/>
                ))
            }
        </div>
    );
}
export default ContactList;