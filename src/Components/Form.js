import React, { useState } from 'react';
import FormList from './FormList'



//passed in props in app for member so props in ()
function Form(props) {
    //take this state and move it to app. adds it to member in app
    const [newMember, setNewMember] = useState({
        memberName: '',
        email: '',
        role: ''
    })

    //we use the spread operator here to merge data b/c whatever we pass to setNewMember will get overwritten and we need stuff from previous state
    const handleChange = event => {
        setNewMember({
            ...newMember, [event.target.name]: event.target.value
        })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.setMembers([...props.members, newMember])
        resetForm(event);
    }

    const resetForm = event => {
        event.preventDefault();
        setNewMember({
            memberName: '',
            email: '',
            role: ''
        });
    }
    //when something is typed in the input field, it will fire handleChange. 
    //handleChange is gonna run and it will create a new object from the current member object. 
    //It wil get event.target.name from the DOM element(title) 
    //and it will set in the state in the new object of title to the value of that input field 
    return (
        <div>
            {/* form tag handles submit */}
            <form onSubmit={handleSubmit}>
                {/* input tag handles state */}
                <input
                    onChange={handleChange}
                    type='text'
                    name='memberName'
                    id=''
                    placeholder='First and last name'
                    value={newMember.memberName}
                />
                <input
                    onChange={handleChange}
                    type='text'
                    name='email'
                    id=''
                    placeholder='Your Email'
                    value={newMember.email}
                />
                <input
                    onChange={handleChange}
                    type='text'
                    name='role'
                    id=''
                    placeholder='Your Role'
                    value={newMember.role} />

                <button type='submit'>Submit</button>

            </form>
        </div>
    )
}
export default Form