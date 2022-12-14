import cn from "classnames";
import ResumeList from "../../components/resume-list/resume-list";
import ExperienceLoader from "../../components/experience-loader/experience-loader";

const education = [
  {
    id: 1,
    title: "University of Minnesota Twin Cities",
    duration: "2006 - 2007",
    descriptionList: [
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    ],
  },

  {
    id: 2,
    title: "University of Minnesota Twin Cities",
    duration: "2006 - 2007",
    descriptionList: [
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    ],
  },

  {
    id: 3,
    title: "University of Minnesota Twin Cities",
    duration: "2006 - 2007",
    descriptionList: [
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    ],
  },
];

const experience = [
  {
    id: 1,
    title: "University of Minnesota Twin Cities",
    duration: "2006 - 2007",
    descriptionList: [
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    ],
  },

  {
    id: 2,
    title: "University of Minnesota Twin Cities",
    duration: "2006 - 2007",
    descriptionList: [
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    ],
  },

  {
    id: 3,
    title: "University of Minnesota Twin Cities",
    duration: "2006 - 2007",
    descriptionList: [
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
      "Awesome student, lorem ipsum dolor sit amet, conse ctetur adipisicing elit, sed do eius- mod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
    ],
  },
];

const Resume = ({ className = "" }) => {
  return (
    <div className={cn(className)}>
      <h1 className="title">Resume</h1>

      <p className="mt-[32px] max-w-[900px] leading-8 tracking-wide font-normal text-gray-600">
        Technical Skills : JavaScript, Tablueau, PowerBI, Python, Express,
        Pandas, MySQL, Heroku
      </p>

      <div className="mt-[48px]">
        <p className="tracking-[0.2rem] font-medium text-gray-500">EDUCATION</p>

        <ResumeList data={education} className="mt-[48px]" />

        <p className="mt-[48px] tracking-[0.2rem] font-medium text-gray-500">
          EXPERIENCE
        </p>

        <ResumeList data={experience} className="mt-[48px]" />

        <p className="mt-[48px] tracking-[0.2rem] font-medium text-gray-500">
          GENERAL SKILLS
        </p>

        <div className="mt-[48px] grid grid-cols-1 md:grid-cols-2 gap-y-[24px] gap-x-[100px]">
          <ExperienceLoader title="HTML" level={70} />
          <ExperienceLoader title="CSS" level={80} />
          <ExperienceLoader title="React" level={70} />
          <ExperienceLoader title="Django" level={80} />
          <ExperienceLoader title="Fast API" level={70} />
          <ExperienceLoader title="Tailwind CSS" level={70} />
        </div>
      </div>
    </div>
  );
};

export default Resume;
