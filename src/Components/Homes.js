import { useEffect, useState } from "react";
import axios from "axios";
import info from "../images/info.png";
import { Link } from "react-router-dom";

const Homes = () => {
  const url = 'http://localhost:3001/';

  const [Pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setPokemon(res.data);
        
      })
  }, [])

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }

  const filteredPokemon = Pokemon.filter(p => {
    return p.nom_pok && p.nom_pok.toLowerCase().includes(searchTerm.toLowerCase())

  })

  return (
    <div className=" w-full  bg-red-300">
      <h1>List of Pokemon</h1>

      <div className="search-bar">
        <input type="text" placeholder="Search Pokemon" onChange={handleSearch} />
      </div>

      <div className="Appp w-full flex flex-row justify-center text-center gap-10 flex-wrap items-center bg-red-500 max-sm:flex-col ">
        {filteredPokemon && filteredPokemon.map(p => (
          <div key={p.id_pok} className="w-3/12 mt-7  bg-green-500 max-sm:w-10/12 ">

            <Link to={`/pokemon/${p.id_pok}`}>
              <button style={{ backgroundImage: `url(${info})` }} className=" w-8 h-8  bg-no-repeat bg-center bg-cover"></button>
            </Link>
            
            <div className="px-6 py-4 flex flex-col gap-4 justify-center items-center">
              <div className="font-bold text-xl mb-2">  <h2>{p.nom_pok}</h2></div>
              <img className="w-30 h-40 " src={p.image_pok} alt="pokemon" />
              {p.stats && p.stats.map(stat => (
                <li key={stat.id}>{stat.type1}</li>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homes;
