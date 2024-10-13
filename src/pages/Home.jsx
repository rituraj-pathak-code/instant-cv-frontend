import Banner from "../components/Banner";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import arrow from "../assets/arrow_dotted.png";
import { FaCameraRetro } from "react-icons/fa";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaBriefcase } from "react-icons/fa";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <div className="my-12 py-4 w-full">
        <h2 className="font-extrabold text-5xl w-[15ch] text-[#13287E]">
          Create a Resume that gets results
        </h2>
        <div className="grid grid-cols-3 gap-8 py-8">
          <div className="flex flex-col gap-2 w-[20vw]">
            <div className="bg-[rgb(151,236,163)] w-fit p-2 rounded-full">
              <FaCameraRetro size={25} />
            </div>
            <h3 className="font-semibold text-lg">Recruiter-Approved Resume</h3>
            <p>
              We work with recruiters to design resume templates that format
              automatically.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[20vw]">
            <div className="bg-[#D2D9F1] w-fit p-2 rounded-full">
              <TfiAlarmClock size={25} />
            </div>
            <h3 className="font-semibold text-lg">Recruiter-Approved Resume</h3>
            <p>
              We work with recruiters to design resume templates that format
              automatically.
            </p>
          </div>
          <div className="flex flex-col gap-2 w-[20vw]">
            <div className="bg-[#FFD797] w-fit p-2 rounded-full">
              <FaBriefcase size={25} />
            </div>
            <h3 className="font-semibold text-lg">Recruiter-Approved Resume</h3>
            <p>
              We work with recruiters to design resume templates that format
              automatically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
