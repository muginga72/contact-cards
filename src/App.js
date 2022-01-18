import React from "react"
import Contact from './components/Contact';
// import whiskerson from './components/img/whiskerson.jpg'
// import fluffykins from './components/img/fluffykins.jpg'
// import felix from './components/img/felix.jpg'
// import pumpkin from './components/img/pumpkin.jpg'
import './styles.css'

function App() {
  return (
    <div className="contacts">
      <Contact 
        img="whiskerson.jpg" alt=""
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contact 
        img="fluffykins.jpg" alt=""
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contact 
        img="felix.jpg" alt=""
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contact 
        img="pumpkin.jpg" alt=""
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  )
}

export default App

