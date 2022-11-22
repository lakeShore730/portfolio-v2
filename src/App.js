import useWindowScroll from "./hooks/use-window-scroll";
import cn from "classnames";
import Home from "./pages";
import Header from "./components/header/header";

function App() {
  const [, scrollY] = useWindowScroll();

  return (
    <>
      <Header
        className={cn("fixed w-full top-0 z-10", {
          "transition-all duration-300 shadow text-primary bg-white": scrollY,
          "pt-[20px] text-white": !scrollY,
        })}
      />
      <Home />
    </>
  );
}

export default App;
