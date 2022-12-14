import { Facebook, GitHub, Linkedin } from "react-feather";
import myImage from "../assets/images/landing-image.jpeg";
import Footer from "../components/footer/footer";
import About from "../features/home/about";
import MyProjects from "../features/home/my-projects";
import Resume from "../features/home/resume";
import Testimonials from "../features/home/testimonials";

const Home = () => {
  return (
    <>
      <div className="pt-[60px] md:pt-[80px] bg-gradient-to-r from-[#ED9916] via-[#AC1DDB] to-primary">
        <div className="app-layout py-[38px] flex gap-[48px]">
          <div className="hidden md:block w-[325px] flex-none relative">
            <img
              src={myImage}
              alt="landing-i"
              className="absolute w-full aspect-[1/1.1] rounded-[4px] object-cover"
            />
          </div>

          <div className="grow text-white">
            <h1 className="text-[32px] md:text-[42px] font-semibold">
              Jay Neupane
            </h1>
            <p className="font-medium">
              IT Consultant, Software Developer, Business Analyst
            </p>

            <div className="flex gap-4 mt-[38px]">
              <div className="flex flex-col gap-3 font-semibold text-gray-200">
                <p>PHONE:</p>
                <p>EMAIL:</p>
                <p>ADDRESS:</p>
              </div>

              <div className="flex flex-col gap-3 font-medium">
                <p>+1 6128052852</p>
                <p>jaybn730@gmail.com</p>
                <p>Minneapolis, Minnesota</p>
              </div>
            </div>

            <div className="mt-[32px] flex items-center gap-5 text-gray-200">
              <GitHub size={20} className="cursor-pointer" />
              <Linkedin size={20} className="cursor-pointer" />
              <Facebook size={20} className="cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      <div id="hi" className="pt-[80px] border-b">
        <About className="app-layout pt-[10px] pb-[50px]" />
      </div>

      <div id="resume" className="pt-[85px]">
        <Resume className="app-layout" />
      </div>

      <div id="myProjects" className="pt-[85px]">
        <MyProjects className="app-layout" />
      </div>

      <div
        id="testimonials"
        className="mt-[85px] pt-[90] py-[40px] bg-[#f7f7f8]"
      >
        <Testimonials className="app-layout" />
        <Footer className="app-layout" />
      </div>
    </>
  );
};

export default Home;
