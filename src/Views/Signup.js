import React from 'react';
import '../Scss/Signup.scss';

const Signup = () => {

    return (
        <>
            <div className="signupContainer">
                <span>First Name</span>&nbsp;
                <input placeholder="first name" /><br />

                <span>Last Name</span>&nbsp;
                <input placeholder="last name" /><br />

                <span>Age</span>&nbsp;
                <input type="number" placeholder="age" /><br />

                <span>Email</span>&nbsp;
                <input placeholder="email" /><br />

                <span>Password</span>&nbsp;
                <input placeholder="password" /><br />

                <button>Signup</button>
            </div>
        </>
    )
};

export default Signup