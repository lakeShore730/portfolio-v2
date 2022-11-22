import cn from "classnames";
import { Facebook, GitHub, Layers } from "react-feather";

const Footer = ({ className = "" }) => {
  const date = new Date();

  return (
    <footer className={cn(className)}>
      <h2 className="text-primary">FOLLOW ME</h2>
      <div className="flex gap-5 mt-[24px]">
        <a
          href="https://stackoverflow.com/users/12390858/yumick-gharti"
          target="_blank"
          rel="noreferrer"
        >
          <Layers className="rounded-full p-[3px] cursor-pointer text-primary" />
        </a>

        <a
          href="https://github.com/bishnuthapa1820"
          target="_blank"
          rel="noreferrer"
        >
          <GitHub className="rounded-full p-[3px] cursor-pointer text-primary" />
        </a>

        <a
          href="https://www.facebook.com/yumick.ghertee"
          target="_blank"
          rel="noreferrer"
        >
          <Facebook className="rounded-full p-[3px] cursor-pointer text-primary" />
        </a>
      </div>

      <p className="mt-[24px] text-[14px] text-center text-primary">
        © {date.getFullYear()} Bishnu Thapa. All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
