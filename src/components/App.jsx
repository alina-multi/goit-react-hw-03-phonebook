import { Component } from "react";
// import { FormEvent } from 'react';
import ContactList from './ContactList/ContactList';
import Basic from './Form/Form';
import Filter from "./Filter/Filter";


 export class App extends Component { 
 state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  
 }

 setNewContact = (newContact)=>{

  this.setState({ contacts: [newContact, ...this.state.contacts] });
  const isMatch = this.state.contacts.find(contact => contact.name === newContact.name)
    
     if (isMatch) { 
       alert(`${newContact.name} is alredy in contacts`);
       return;
     }



 }
   
   handleChange = e => { 
     const { value, name } = e.currentTarget;
     this.setState(
       {
         [name]: value
       }
     );    
   }


   handleFilter = (e) => { 
    const { value, name } = e.currentTarget;
    this.setState(
       {
         [name]: value
       }
     );
  
    this.contactsFilter();
  
   }

   contactsFilter = () => {
     const filterNirmilized = this.state.filter.toLocaleLowerCase();
     const visibleArray = this.state.contacts.filter(contact=> contact.name.toLowerCase().includes(filterNirmilized))
     return visibleArray;
   
   }

   onDeleteButton = (contactID) => {
     this.setState((prevState) => ({ contacts: prevState.contacts.filter(contact => contact.id !== contactID) }))
   
   }



  render() { 
    return <div>
      <Basic setNewContact={this.setNewContact}/>
      <Filter contacts={this.state.contacts} filter={this.state.filter} onChange={this.handleFilter}/>
      <ContactList visibleContacts={this.contactsFilter} onDeleteButton={this.onDeleteButton}/>
    </div> 
  }
   
  
    
 }

