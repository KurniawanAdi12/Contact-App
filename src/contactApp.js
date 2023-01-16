import React from "react";
import ContactList from "./contactItemList"; 
import { getData } from "./data";

function ContactsApp(){
    const contacts = getData();
    return(
        <div className="contact-app">
            <h1>Daftar Kontak</h1>
            <ContactList contact={contacts}/>
        </div>
    )
}

export default ContactsApp;