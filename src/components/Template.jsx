import { FaGithub } from "react-icons/fa";
import { useResumeInfo } from "../contexts/ResumeInfoContext";

const Template = () => {
    const {personalInfo,education} = useResumeInfo()
  return (
      <div className="min-h-[80vh] shadow py-6 px-4 text-xs w-full bg-white">
        {/* HEADER */}
        <div>
          <h2 className="font-bold text-lg text-center">{personalInfo?.firstName || "FIRSTNAME"}  {personalInfo?.lastName || "LASTNAME"}</h2>
          <p className="text-center my-[3px]">{personalInfo?.phone || "+91 00000-00000"} / {personalInfo?.email || "rituu@gamil.com"}</p>
          <div className="flex justify-center items-center gap-4">
            <a
              href={personalInfo?.github}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>GITHUB</span>
            </a>
            <a
              href={personalInfo?.linkedin}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>LINKEDIN</span>
            </a>
            <a
              href={personalInfo?.portfolio}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>PORTFOLIO</span>
            </a>
            <a
              href={personalInfo?.leetcode}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>LEETCODE</span>
            </a>
          </div>
        </div>
        {/* EDUCATION */}
        <div className="my-[10px]">
          <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
            EDUCATION
          </h3>
          {education.map((item,index)=> (
            <div className="flex justify-between items-start pt-[5px] text" key={index}>
            <div>
              <h4 className="font-semibold">{item?.degree || "B.TECH in Computer Science"}</h4>
              <p>{item?.institute || "Jorhat Engineering College"}</p>
            </div>
            <p>{item?.start_date && `${item.start_date} - `}{item?.end_date || "xxxx"}</p>
          </div>
          ))}
        </div>
        {/* SKILLS */}
        <div className="my-[10px]">
          <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
            SKILLS
          </h3>
          <div className="flex gap-6 pt-[5px]">
            <div className="font-semibold">
              <h4>Languages :</h4>
              <h4>Frameworks/Libraries :</h4>
              <h4>Database :</h4>
              <h4>Other :</h4>
            </div>
            <div className="">
              <p>Java, JavaScript, Python, C++, HTML, CSS</p>
              <p>React, NodeJS, Express, TailwindCSS, Redux, React Query</p>
              <p>MongoDB, MySQL</p>
              <p>Git, Linux, DSA, OS, DBMS</p>
            </div>
          </div>
        </div>
        {/* EXPERIENCE */}
        <div className="my-[10px]">
          <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
            EXPERIENCE
          </h3>
          <div className="pt-[5px]">
            <div>
              <div className="flex justify-between w-full">
                <div>
                  <h4 className="font-semibold">Role Name</h4>
                  <p>Company Name</p>
                </div>
                <div>
                  <p>2012-2018</p>
                </div>
              </div>
              <ul className="mt-[5px] list-disc ml-4">
                <li>Achieved X% growth for XYZ using A, B and C skills</li>
                <li>Led XYZ which led X% improvement of PQR</li>
                <li>Achieved X% growth for XYZ using A, B and C skills</li>
              </ul>
            </div>
            <div className="mt-2">
              <div className="flex justify-between w-full">
                <div>
                  <h4 className="font-semibold">Role Name</h4>
                  <p>Company Name</p>
                </div>
                <div>
                  <p>2012-2018</p>
                </div>
              </div>
              <ul className="mt-[5px] list-disc ml-4">
                <li>Achieved X% growth for XYZ using A, B and C skills</li>
                <li>Led XYZ which led X% improvement of PQR</li>
                <li>Achieved X% growth for XYZ using A, B and C skills</li>
              </ul>
            </div>
          </div>
        </div>
        {/* PROJECTS */}
        <div className="my-[10px]">
          <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
            PROJECTS
          </h3>
          <div className="pt-[5px]">
            <div>
              <p>
                <span className="font-semibold">PROJECT TITLE : </span> Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Iste
                repellendus expedita provident aperiam autem dolores minima
                magnam illum et atque perferendis veritatis quod nesciunt vel
                asperiores repellat recusandae, dolore enim.{" "}
                <a href="" className="text-blue-900 underline">
                  Try it Here
                </a>
              </p>
            </div>
            <div className="mt-2">
              <p>
                <span className="font-semibold">PROJECT TITLE : </span> Lorem
                ipsum dolor sit amet consectetur, adipisicing elit. Iste
                repellendus expedita provident aperiam autem dolores minima
                magnam illum et atque perferendis veritatis quod nesciunt vel
                asperiores repellat recusandae, dolore enim.{" "}
                <a href="" className="text-blue-900 underline">
                  Try it Here
                </a>
              </p>
            </div>
          </div>
        </div>
        {/* CERTIFICATIONS */}
        <div className="my-[10px]">
          <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
            CERTIFICATIONS
          </h3>
          <div className="pt-[5px]">
            <ul className="list-disc ml-4">
              <li>
                XYZ university certification course{" "}
                <a href="" className="text-blue-900 underline">
                  (Link Here)
                </a>
              </li>
              <li>
                Certificate from an online course{" "}
                <a href="" className="text-blue-900 underline">
                  (Link Here)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Template;
