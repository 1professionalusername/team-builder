import React, { useState, useEffect } from 'react';
import Form from './Components/Form'
import FormList from './Components/FormList'
import './App.css';

//history.push is used when you need to programmatically route you can send them to a route without them having to click on a link.
//synthetic events in React allow us to attach event listeners to the virtual DOM instead of the actual DOM(onClick, onChange for example)

function App() {
  //we will pass this as props below in form
  const [members, setMembers] = useState([{
    memberName: 'Brandon Green',
    email: 'bodaciousponytail@gmail.com',
    role: 'Software Engineer'
  }])

  console.log(members);


  //passing members to form in return
  return (
    <div className="App">
      <h1>Add Team Member</h1>
      <Form members={members} setMembers={setMembers} />
      <FormList members={members} />

    </div>
  );
}

export default App;
