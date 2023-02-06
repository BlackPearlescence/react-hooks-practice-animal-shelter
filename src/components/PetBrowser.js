import React from "react";
// eslint-disable-next-line
import Pet from "./Pet";

function PetBrowser({pets,onAdoptPet}) {

  

  return(
  <div className="ui cards">
    {pets.map(pet => 
    <Pet 
    key={pet.id} 
    pet={pet} 
    onAdoptPet={onAdoptPet}/>)}
  </div>
  );
}

export default PetBrowser;
