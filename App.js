import React from "react"
import ContactCard from "./ContactCard"

function App() {
    return (
        <div className="contacts">

            <ContactCard
                name="Mr. Whiskerson"
                imgUrl="http://placekitten.com/300/200"
                phone="(000) 111-2222"
                email="mr.whiskaz@catnap.meow"
            />

            <ContactCard
                name="Mr. Benji"
                imgUrl="http://placekitten.com/g/300/200"
                phone="(111) 222-3333"
                email="mr.benji@catnap.meow" 
            />

            <ContactCard
                name="Mr. Tammy"
                imgUrl="http://placekitten.com/300/200"
                phone="(222) 333-4444"
                email="mr.tammy@catnap.meow" 
            />
            
            <ContactCard
                name="Mr. Ginger"
                imgUrl="http://placekitten.com/g/300/200"
                phone="(333) 444-5555"
                email="mr.ginger@catnap.meow" 
            />

        </div>
    )
}

export default App