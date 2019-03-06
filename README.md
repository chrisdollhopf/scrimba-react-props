# scrimba-react-props

refactoring step 2:

Instead of passing down each piece of information reagarding
a cat as individual properties ie:

<!-- 

<ContactCard

    name="Mr. Whiskerson"
    imgUrl="http://placekitten.com/300/200"
    phone="(000) 111-2222"
    email="mr.whiskaz@catnap.meow"

/>

-->

Rather we can pass them down an entire object. Typically this
is not hard coded but instead comes from a .json file. Therefore
to pass down the entire object is preparatory step.


<!-- 

<ContactCard 
    {oject{js}}
    contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(000) 111-2222", email: "mr.whiskaz@catnap.meow"}}

/>

-->

Refactored ContactCard.js to accept the new refactored App.js contact
object by modifying the ContactCard.js JSX objects with the 
props.contact.somnething paremeters