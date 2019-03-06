import React from "react"

function ContactCard(props) {
    return (
        <div className="contact-card">
            <img src={props.imgUrl}/>
            <h3>{props.name}</h3>
            {/* Leaving the Phone: space as a hard coded value */}
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
    )
}

/* The above block of code is now a component that is now reusable. */

export default ContactCard