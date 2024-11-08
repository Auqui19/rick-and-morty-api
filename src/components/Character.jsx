import PropTypes from "prop-types";

function Character({ character }) {
  return (
    <div className="bg-zinc-800 grid grid-cols-2 items-center justify-center rounded-lg p-5 gap-5">
      <img
        className="rounded-full"
        src={character.image}
        alt={character.name}
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold">{character.name}</h2>
        <div className="flex gap-2 items-center">
          {character.status === "Alive" ? (
            <span className="text-xs">🟢</span>
          ) : character.status === "Dead" ? (
            <span className="text-xs">🔴</span>
          ): (
            <span className="text-xs">⚪</span>
          )}
          <p className="text-sm">
            {character.status} - {character.species}
          </p>
        </div>
      </div>
    </div>
  );
}

Character.propTypes = {
    character: PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
    }).isRequired,
};

export default Character;