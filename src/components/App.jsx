import { useState, useEffect, useMemo } from "react";
import ContactList from './ContactList/ContactList';
import FormField from './Form/Form';
import Filter from "./Filter/Filter";



const useLocalStorage = (key, initialValue) => {
  const [state, setState] = useState(() => {
    console.log(window.localStorage.getItem(key))
    return JSON.parse(window.localStorage.getItem(key)) ?? initialValue;
  });

  return [state, setState];
}

export const App =()=>{
const [contacts, setContacts]= useLocalStorage("contacts", [])
const [filter, setFilter]= useState('')


const  setNewContact = (newContact)=>{
    setContacts([newContact, ...contacts]);
    const isMatch = contacts.find(contact => contact.name === newContact.name)
      
       if (isMatch) { 
         alert(`${newContact.name} is alredy in contacts`);
         return;
       }
  
  
  
   }
    
      useEffect(() => {
        if(!contacts){
          return;
         }

     localStorage.setItem('contacts', JSON.stringify(contacts));

      }, [contacts]);

    const  handleFilter = (e) => { 
      setFilter(e.currentTarget.value);
      contactsFilter();
    
     }

     const contactsFilter = () => {
      const filterNormalized = filter.toLowerCase()
     
      
      const visibleArray = contacts.filter(contact=> contact.name.toLowerCase().includes(filterNormalized))
      return visibleArray;
    
    }
  

    //  useMemo??
  
  
     const onDeleteButton = (contactID) => {

       setContacts(prevState => {
        console.log(prevState)
          return prevState.filter(contact => contact.id !== contactID)
       }) 
     
     }
      return <div >
         
         <FormField setNewContact={setNewContact} />
         
        <div >
        <Filter contacts={contacts} filter={filter} onChange={handleFilter}/>
        <ContactList visibleContacts={contactsFilter} onDeleteButton={onDeleteButton}/>
  </div>
       
      </div> 
}


