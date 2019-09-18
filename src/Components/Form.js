import React, { useState } from 'react';




//passed in props in app for member so props in ()
function Form(props) {
    //take this state and move it to app. adds it to member in app
    const [newMember, setNewMember] = useState({
        memberName: '',
        email: '',
        role: ''
    })


    const handleChange = event => {
        //destructuring e.t.v is creating a key and below in membername it grabs the 'name' and then the e.t.v is grabbing whats in the value field/listens to every input field
        setNewMember({
            ...newMember, [event.target.name]: event.target.value
        })
    }
    //console.log(newMember)

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

    return (

        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type='text'
                    name='memberName'
                    id=''
                    placeholder='First and last name' />
                <input
                    onChange={handleChange}
                    type='text'
                    name='email'
                    id=''
                    placeholder='First and last name' />
                <input
                    onChange={handleChange}
                    type='text'
                    name='role'
                    id=''
                    placeholder='First and last name' />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Form