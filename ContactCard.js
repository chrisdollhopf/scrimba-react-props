import React from "react"

/* Introduce a function paramter called props (can be called whatever
but is typically called props short for properties

Props is an object thhat has properties of that object, each one being
a property that you passed in (in this case the App.js "contacts" or 
rather the name that you passed in */

function ContactCard(props) {

/*     console.log(props) logs 4 console.log entries because we have at this
    point 4 instances of the ContactCard component and the props are an
    object with a name, imgUrl, email and phone properties.  */
    
    return (
        <div className="contact-card">
            <img src="http://placekitten.com/300/200"/>
            <h3>Mr. Whiskerson</h3>
            <p>Phone: (000) 111-2222</p>
            <p>Email: mr.whiskaz@catnap.meow</p>
        </div>
    )
}

export default ContactCard