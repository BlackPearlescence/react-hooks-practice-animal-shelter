import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  // eslint-disable-next-line
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


 

  const handleFilterTypeChange = (e) => {
    setFilters({...filters, type: e.target.value})
  }
  const handleFindPetsClick = (e) => {
    if(filters.type === "all"){
      fetch(`http://localhost:3001/pets`)
        .then((res) => res.json())
        .then((petData) => setPets(petData))
        .then((result) => console.log("Loaded: ",result))
        .catch((err) => console.log("Failure",err))
    }
    else{
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
        .then((res) => res.json())
        .then((petData) => setPets(petData))
        .then((result) => console.log("Loaded: ",result))
        .catch((err) => console.log("Failure",err))
    }
    
  }
  const handleAdoptPetClick = (id, e) => {
    const updatedMatch = pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = true
        return pet
      }
      else{
        return pet
      }
    })
    setPets(updatedMatch)
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={handleFilterTypeChange}
            onFindPetsClick={handleFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPetClick}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
