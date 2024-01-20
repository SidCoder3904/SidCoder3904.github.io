import Info from "./components/Info";
import Intro from "./components/Intro";

const App = () => {
  return (
    <div className="flex-wrap h-full w-full absolute bg-palette4 overflow-auto font-Raleway">
      <Intro />
      <Info />
    </div>
  );
};

export default App;
