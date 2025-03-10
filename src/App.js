import { useEffect, useState} from "react";
import './App.css';
import { getAllPokemon,getPokemon } from "./utils/pokemon.js";
import Navbar from "./components/Navbar/Navbar";
import Card from "./components/Card/Card";

function App() {
  const initialURl = "https://pokeapi.co/api/v2/pokemon";
  const [loading,setLoading] = useState(true);
  const[pokemonData,setPokemonData] = useState([]);
  const[nextUrl,setNextURL] = useState("");
  const[prevURL,setPrevURL] = useState("");

  useEffect(() => {
    const fetchPokemonData = async () => {
      //全てのポケモンデータを取得
      let res = await getAllPokemon(initialURl);
      //各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      //console.log(res.next);
      setNextURL(res.next);
      setPrevURL(res.previous); //null
      setLoading(false);
    };
    fetchPokemonData();
  },[]);

  const loadPokemon = async(date) => {
    let _pokemonData =await  Promise.all(
      date.map((pokemon) => {
        //console.log(pokemon);
        let pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );
    setPokemonData(_pokemonData);
  };

  // console.log(pokemonData);
  const handleNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    //console.log(data);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };
  const handlePrevPage = async() => {
  if(!prevURL) return;

  setLoading(true);
  let data = await getAllPokemon(prevURL);
  await loadPokemon(data.results);
  setNextURL(data.next);
  setPrevURL(data.previous);
  setLoading(false);
  };

  return(
  <>
    <Navbar/>
    <div className="App">
      {loading ? (
      <h1>ロード中・・・</h1>
      ) : (
        <>
         <div className="pokemonCardContainer">
          {pokemonData.map((pokemon,i) => {
            return <Card key={i} pokemon={pokemon}/>;
          })}
         </div>
         <div className="btn">
          <button onClick={handlePrevPage}>前へ</button>
          <button onClick={handleNextPage}>次へ</button>
          </div>
        </>
      )}
    </div>
  </>
  );
}

export default App;
