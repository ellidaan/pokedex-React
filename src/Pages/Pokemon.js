import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // Appeler la route de l'API pour récupérer les détails du Pokemon
    axios
      .get(`http://localhost:3001/pokemon/${id}`)
      .then(response => {
        setPokemon(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div>
        <h1>{pokemon.nom_pok}</h1>
     

    </div>
  );
}

export default PokemonPage;
