import { useState } from "react";
import cn from "classnames";
import restroxImg from "../../assets/images/projects/restrox.png";
import bookLifterImg from "../../assets/images/projects/book-lifter.png";
import ProjectItem from "../../components/project-item/project-item";
import Modal from "../../components/modal";

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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus. Duis ante purus, consectetur sit amet malesuada vitae, vestibulum et massa. Aenean finibus, magna sit amet aliquet pharetra, leo leo suscipit mauris, vel interdum ante mauris vel libero. Proin porttitor sapien odio, ac porttitor nisi vestibulum nec. Integer sit amet ligula finibus, rutrum nunc id, maximus lacus. Aenean volutpat, ante vitae convallis rhoncus, nulla mauris sodales nisi, ac volutpat erat massa ut nulla. ",
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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus. ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas auctor vehicula nibh, id ultricies mi rutrum faucibus. Fusce lacinia lacus sapien, at finibus leo pharetra at. Morbi a mauris metus. Duis ante purus, consectetur sit amet malesuada vitae, vestibulum et massa. Aenean finibus, magna sit amet aliquet pharetra, leo leo suscipit mauris, vel interdum ante mauris vel libero. Proin porttitor sapien odio, ac porttitor nisi vestibulum nec. Integer sit amet ligula finibus, rutrum nunc id, maximus lacus. Aenean volutpat, ante vitae convallis rhoncus, nulla mauris sodales nisi, ac volutpat erat massa ut nulla. ",
  },
];

const MyProjects = ({ className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleHandler = () => setIsOpen((oldState) => !oldState);

  return (
    <>
      <div className={cn(className)}>
        <h1 className="title">Projects</h1>

        <div className="mt-[32px] grid grid-rows-1 gap-[48px]">
          {projects.map((item) => (
            <ProjectItem
              key={item.id}
              item={item}
              className="shadow-md rounded-md hover:shadow-lg cursor-pointer"
              onClick={() => {
                setSelectedItem(item);
                setIsOpen(true);
              }}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        toggleHandler={toggleHandler}
        data={selectedItem}
        className="max-w-[1000px]"
      >
        <ProjectItem
          item={{
            ...selectedItem,
            shortDescription: selectedItem?.description,
          }}
        />
      </Modal>
    </>
  );
};

export default MyProjects;
