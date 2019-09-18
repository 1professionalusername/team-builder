import React, { useState, useEffect } from 'react';
import Form from './Components/Form'
import FormList from './Components/FormList'
import './App.css';


function App() {
  //we will pass this as props below in form
  const [members, setMembers] = useState({
    memberName: 'Brandon Green',
    email: 'bodaciousponytail@gmail.com',
    role: 'Software Engineer'
  })

  console.log(members);


  //passing members to form in return
  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <Form members={members} setMembers={setMembers} />
      <FormList />
    </div>
  );
}

export default App;
