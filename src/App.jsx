import CharacterList from "./components/CharacterList";
import "./App.css";

function App() {
  return (
      <div className="bg-black text-white flex flex-col items-center justify-center h-full w-full py-10 px-5 gap-5">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/19643055883023.5996f8afa3a8f.gif" alt="Banner" className="w-[30%]" />
        <CharacterList />
      </div>
  );
}

export default App;
