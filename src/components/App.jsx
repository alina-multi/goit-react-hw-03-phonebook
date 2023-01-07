import { Component } from "react";
// import { FormEvent } from 'react';
import ContactList from './ContactList/ContactList';
import FormField from './Form/Form';
import Filter from "./Filter/Filter";



 export class App extends Component { 
 state = {
   contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: ''
  
 }

 componentDidMount (){

  const contacts = localStorage.getItem("contacts")
 
  if (contacts!== null){
  this.setState({
    contacts: [...JSON.parse(contacts)]
  })
 
  } }

 componentDidUpdate (_, prevState) {
  if(prevState !== this.state.contacts) {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }
  

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
    return <div className="container mx-auto px-2">
       
       <FormField setNewContact={this.setNewContact} />
       
      <div className="box-border">
      <Filter contacts={this.state.contacts} filter={this.state.filter} onChange={this.handleFilter}/>
      <ContactList visibleContacts={this.contactsFilter} onDeleteButton={this.onDeleteButton}/>
</div>
     
    </div> 
  }
   
  
    
 }

