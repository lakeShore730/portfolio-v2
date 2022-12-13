import cn from "classnames";
import ResumeList from "../../components/resume-list/resume-list";
import ExperienceLoader from "../../components/experience-loader/experience-loader";

const education = [
  {
    id: 1,
    title: "Georgia Institute of Technology",
    duration: "2022- Currently Attedning (Part-time)",
    description:
      "Masters of Science in Cybersecurity",
  },
  {
    id: 2,
    title: "University of St Thomas",
    duration: "2015-2019",
    description:
      "Bachelors of Arts in Finance with a Minor in Computer Science",
  },
  {
    id: 3,
    title: "Eden Prairie High School",
    duration: "2011-2015",
    description:
      "High School Diploma",
  },

];

const experience = [
  {
    id: 1,
    title: "UnitedHealthCare",
    duration: "Business Analyst (06-2022 - current)",
    description:
      "Track, and deliver key quality success measures related to accuracy and timeliness of communications projects flowing through the platform/team."
  },
  {
    id: 2,
    title: "PricewaterhouseCoopers",
    duration: "Digital Risk Associate (08-2019 - 06-2022)",
    descriptions:
      "Perform planning, evidence gathering, testing, documentation, and review on IT general controls and business process reviews."
  },
  {
    id: 3,
    title: "FullStack Developer",
    duration: "Software developer (05-2020 - current)",
    description:
      "Work on frontend and backend development for projects at Lakeshore LLC."
  },
];

const Resume = ({ className = "" }) => {
  return (
    <div className={cn(className)}>
      <h1 className="title">Resume</h1>

      <p className="mt-[32px] max-w-[900px] leading-8 tracking-wide font-normal text-gray-600">
      Technical Skills : JavaScript, Tablueau, PowerBI, Python, Express, Pandas, MySQL, Heroku
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
