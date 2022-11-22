import cn from "classnames";
import { X } from "react-feather";

const NavDrawer = ({ isOpened, setIsOpened, navigation, navigate }) => {
  const toggleDrawer = () => {
    setIsOpened((prevState) => !prevState);
  };

  return (
    <div
      className={cn(
        "fixed left-0 w-full h-full box-border p-5 z-20 overflow-hidden transition-all duration-500 text-white bg-[rgba(0,0,0,.8)]",
        {
          "top-[-100vh] ": !isOpened,
          "top-0": isOpened,
        }
      )}
    >
      <div className="flex justify-end opacity-100">
        <X className="cursor-pointer" onClick={toggleDrawer} />
      </div>

      <div className="mt-14">
        {navigation.map((nav) => (
          <div key={nav.id} className="flex justify-center mt-[38px]">
            <p
              className="font-bold uppercase cursor-pointer"
              onClick={() => {
                toggleDrawer();
                setTimeout(() => navigate(nav.sectionId), 500);
              }}
            >
              {nav.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavDrawer;
