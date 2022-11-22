import cn from "classnames";
import { downloadPDF } from "../../utils";

const About = ({ className = "" }) => {
  return (
    <div className={cn(className)}>
      <h1 className="title">Hi</h1>
      <p className="mt-[32px] max-w-[900px] leading-8 tracking-wide font-normal text-gray-600">
        Experience and creative full-stack developer with +1.5 years' background
        in web development. Highly motivated BIT graduate with good knowledge
        and experience in web development. Passionate about building responsive
        web design using various frameworks.
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
