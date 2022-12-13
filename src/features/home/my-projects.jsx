import cn from "classnames";
import restroxImg from "../../assets/images/projects/restrox.png";
import bookLifterImg from "../../assets/images/projects/book-lifter.png";
import ProjectItem from "../../components/project-item/project-item";

const projects = [
  {
    id: "1",
    name: "Restaurant management system (Restrox)",
    usedStacks: ["React", "ReactStrap", "ChartJS", "React Router DOM"],
    link: {
      name: "www.restrox.co",
      url: "https://www.restrox.co",
    },
    image: [restroxImg],
    shortDescription:
      "RestroX is not just a POS system. It is an ultimate restaurant operating system gathered with high-end features compacted all in one app.",
    description:
      "RestroX is not just a POS system. It is an ultimate restaurant operating system gathered with high-end features compacted all in one app. ",
  },

  {
    id: "2",
    name: "Book Lifter",
    usedStacks: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Headless UI",
      "Slider",
    ],
    link: {
      name: "www.booklifter.com",
      url: "https://www.booklifter.com",
    },
    image: [bookLifterImg],
    shortDescription:
      "Book Lifter, a web application, makes it easier for users to purchase and borrow books from sellers and librarians. Here a user can get a library membership to ultimate access to all the books available on the library.",
    description:
      "Book Lifter, a web application, makes it easier for users to purchase and borrow books from sellers and librarians. Here a user can get a library membership to ultimate access to all the books available on the library.",
  },
  {
    id: "3",
    name: "Maya Museum",
    usedStacks: [
      "React",
      "Typescript",
      "Tailwind CSS",
      "Headless UI",
      "Slider",
    ],
    link: {
      name: "www.mayamuseum.com",
      url: "https://maya-museum.vercel.app/",
    },
    image: [bookLifterImg],
    shortDescription:
      "Maya museum, made using React JS, which gives users to buy traditional statues, paintings, and sculptures.",
    description:
      "Maya museum, made using React JS, which gives users to buy traditional statues, paintings, and sculptures.",
  },
];

const MyProjects = ({ className = "" }) => {
  return (
    <>
      <div className={cn(className)}>
        <h1 className="title">Projects</h1>

        <div className="mt-[32px] grid grid-rows-1 gap-[48px]">
          {projects.map((item) => (
            <ProjectItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyProjects;
