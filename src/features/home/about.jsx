import cn from "classnames";
import { downloadPDF } from "../../utils";

const About = ({ className = "" }) => {
  return (
    <div className={cn(className)}>
      <h1 className="title">Hi</h1>
      <p className="mt-[32px] max-w-[900px] leading-8 tracking-wide font-normal text-gray-600">
      I am a Business and IT professional with +3 years of experience in IT Auditing, and business analysis. Full-stack developer with +3 years background in web development. Highly motivated with knowledge and experience in IT , and software development. Passionate about working with new technologies and building responsive web designs using various frontend and backend frameworks.
      </p>

      <button
        className="mt-[32px] py-3 px-8 rounded-[30px] text-white bg-primary hover:bg-dark-primary"
        onClick={downloadPDF}
      >
        Download CV
      </button>
    </div>
  );
};

export default About;
