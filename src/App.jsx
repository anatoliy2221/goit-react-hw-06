// import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/contactForm/ContactForm";
import SearchBox from "./components/searchBox/SearchBox";
import ContactList from "./components/contactList/ContactList";

const App = () => {
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm  />  
      <SearchBox  />
      <ContactList  />
    </div>
  );
};

export default App;


