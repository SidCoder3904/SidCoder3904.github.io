import Info from "./components/Info";
import Intro from "./components/Intro";
import { useState, useEffect } from "react";
import Loading from "./components/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex-wrap h-full w-full absolute bg-palette4 bg-gradient-to-t from-palette4 via-transparent to-palette4 overflow-auto font-Raleway select-none scroll-smooth">
      <Intro />
      <Info />
    </div>
  );
};

export default App;
