import { useEffect, useState } from "react";
import Character from "./Character";
import PropTypes from "prop-types";

function NavPage(props) {
  return (
    <div className="w-full flex items-center justify-between">
      <button
        onClick={() => {
          if (props.page > 0) {
            props.setPage(props.page - 1);
          }
        }}
        disabled={props.page === 1}
        className="text-zinc-800 bg-white rounded-lg p-2 my-5"
      >
        Pagina {props.page - 1}
      </button>
      <p>Pagina: {props.page}</p>
      <button
        onClick={() => props.setPage(props.page + 1)}
        className="text-zinc-800 bg-white rounded-lg p-2 my-5"
      >
        Pagina {props.page + 1}
      </button>
    </div>
  );
}

NavPage.propTypes = {
  page: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [search, setSearch] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data.results || []);
    }
    fecthData();
  }, [page]);

  useEffect(() => {
    async function fecthDataByName() {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?name=${name}`
      );
      const data = await response.json();
      setSearch(data.results || []);
    }
    fecthDataByName();
  }, [name, setSearch]);

  return (
    <div className="flex flex-col items-center justify-start h-full min-h-screen w-10/12">
      <div>
        <input type="text" placeholder="Buscar por su nombre" onChange={(e) => setName(e.target.value)} className="text-black" />
      </div>
      <NavPage page={page} setPage={setPage} />

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full h-full">
          {(name && search.length > 0 ? search : characters).map((character) => {
            return <Character character={character} key={character.id} />;
          })}
        </div>
      )}
      <NavPage page={page} setPage={setPage} />
    </div>
  );
}

export default CharacterList;
