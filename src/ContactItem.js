import React from 'react';
import ContactImage from './contactItemImage';
import ContactsBody from './contactItemBody';

function ContactItem({imageUrl,tag,name}){
    return(
        <div className='contact-item'>
            <ContactImage imageUrl={imageUrl}/>
            <ContactsBody name={name} tag={tag}/>        
        </div>
    );
}

export default ContactItem;