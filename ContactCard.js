import React from "react"

{/* receiving all properities as an object called props */}
{/* because only passing a single prop down that has prop.contact that
has its own properties such as props.contact.imgUrl , name etc. */}

    function ContactCard(props) {
        console.log(props)
        return (
            <div className="contact-card">
                {/* Added contact propertie to following objects */}
                <img src={props.contact.imgUrl}/>
                <h3>{props.contact.name}</h3>
                <p>Phone: {props.contact.phone}</p>
                <p>Email: {props.contact.email}</p>
            </div>
        )
    }

/* The above block of code is now a component that is now reusable. */

export default ContactCard