import { useState } from "react";
import cn from "classnames";
import { Menu } from "react-feather";
import useWindowSize from "../../hooks/use-window-size";
import navigation from "../../navigation";
import NavDrawer from "../nav-drawer/nav-drawer";

const Header = ({ className = "" }) => {
  const { width } = useWindowSize();
  const [isNavDrawerOpened, setIsNavDrawerOpened] = useState(false);

  const navigate = (id) => {
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (width < 768) {
    return (
      <>
        <header className={cn(className)}>
          <nav className="app-layout h-[60px] flex items-center gap-12">
            <Menu
              className="cursor-pointer"
              onClick={() =>
                setIsNavDrawerOpened((previousState) => !previousState)
              }
            />
          </nav>
        </header>

        <NavDrawer
          isOpened={isNavDrawerOpened}
          setIsOpened={setIsNavDrawerOpened}
          navigation={navigation}
          navigate={navigate}
        />
      </>
    );
  }

  return (
    <header className={cn(className)}>
      <nav className="app-layout h-[60px] flex items-center gap-12">
        {navigation.map((item) => (
          <p
            key={item.id}
            className="text-[14px] uppercase tracking-wider font-semibold cursor-pointer"
            onClick={() => navigate(item.sectionId)}
          >
            {item.name}
          </p>
        ))}
      </nav>
    </header>
  );
};

export default Header;
