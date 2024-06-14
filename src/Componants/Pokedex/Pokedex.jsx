import { useEffect, useState } from "react";
import PokemonList from "../PokemonList/PokemonList";
import Search from "../Search/Search";
import PokemonDetails from "../PokemonDetails/PokemonDetails";

function Pokedex(){

    const [searchterm,setSearchterm]=useState("")
    useEffect(()=>{

    },[searchterm])
    return(

<> 

           <Search updateSearchterm={setSearchterm}/>
           
           { (!searchterm) ? <PokemonList /> : <PokemonDetails key={searchterm} pokemonName={searchterm} />}
</>
    )
}
export default Pokedex;