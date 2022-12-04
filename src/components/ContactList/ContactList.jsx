import React from 'react';
 
const ContactList = ({ visibleContacts, onDeleteButton }) => {
    const dataUser = visibleContacts();
    return <ul>
        {dataUser.map(user => <li key={user.id}>{user.name}: {user.number} <button type="button" onClick={() => onDeleteButton(user.id)}>Delete</button>
        </li>)}
    </ul>
   
};

export default ContactList;