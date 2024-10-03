import { FaGithub } from "react-icons/fa";
import { useResumeInfo } from "../contexts/ResumeInfoContext";

const Template = () => {
  const { personalInfo, education, skills, experience, projects } =
    useResumeInfo();
  return (
    <div className="min-h-[83vh] shadow py-6 px-4 text-xs w-[500px] bg-white">
      {/* HEADER */}
      <div>
        <h2 className="font-bold text-lg text-center">
          {personalInfo?.firstName} {personalInfo?.lastName}
        </h2>
        {personalInfo?.phone && personalInfo?.email && (
          <p className="text-center my-[3px]">
            {personalInfo?.phone} / {personalInfo?.email}
          </p>
        )}
        <div className="flex justify-center items-center gap-4">
          {personalInfo?.github && (
            <a
              href={personalInfo?.github}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>GITHUB</span>
            </a>
          )}
          {personalInfo?.linkedin && (
            <a
              href={personalInfo?.linkedin}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>LINKEDIN</span>
            </a>
          )}
          {personalInfo?.portfolio && (
            <a
              href={personalInfo?.portfolio}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>PORTFOLIO</span>
            </a>
          )}
          {personalInfo?.leetcode && (
            <a
              href={personalInfo?.leetcode}
              className="flex justify-center items-center gap-2 text-blue-900"
              target="_blank"
            >
              <FaGithub />
              <span>LEETCODE</span>
            </a>
          )}
        </div>
      </div>
      {/* EDUCATION */}
      <div className="my-[10px]">
        <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
          EDUCATION
        </h3>
        {education.map((item, index) => (
          <div
            className="flex justify-between items-start pt-[5px] text"
            key={index}
          >
            <div>
              <h4 className="font-semibold">{item?.degree}</h4>
              <p>{item?.institute}</p>
            </div>
            <p>
              {item?.start_date && `${item.start_date} - `}
              {item?.end_date}
            </p>
          </div>
        ))}
      </div>

      {/* EXPERIENCE */}
      <div className="my-[10px]">
        <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
          EXPERIENCE
        </h3>

        <div className="pt-[5px]">
          {experience.map((exp, index) => (
            <div key={index}>
              <div className="flex justify-between w-full">
                <div>
                  <h4 className="font-semibold">{exp.role}</h4>
                  <p>{exp.company}</p>
                </div>
                <div>
                  <p>
                    {exp?.start_date && `${exp.start_date} - `}
                    {exp?.end_date}
                  </p>
                </div>
              </div>
              <ul className="mt-[5px] list-disc ml-4">
                {exp.description.map(
                  (desc, i) => desc && <li key={`${index}${i}`}>{desc}</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
      {/* PROJECTS */}
      <div className="my-[10px]">
        <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
          PROJECTS
        </h3>
        <div className="pt-[5px]">
          {projects.map(
            (item, index) =>
              item.title &&
              item?.description && (
                <div key={index}>
                  <p>
                    <span className="font-semibold">{item?.title} : </span>{" "}
                    {item?.description}{" "}
                    <a href="" className="text-blue-900 underline">
                      {item?.link}
                    </a>
                  </p>
                </div>
              )
          )}
        </div>
      </div>
      {/* SKILLS */}
      <div className="my-[10px]">
        <h3 className="border-b-black border-b-[1px] pb-[3px] text-base font-bold">
          SKILLS
        </h3>
        <div className="flex gap-6 pt-[5px]">
          <div className="font-semibold">
            {skills.map(
              (item, index) =>
                item.skill_type && <h4 key={index}>{item?.skill_type} :</h4>
            )}
          </div>
          <div className="">
            {skills.map((item, index) => (
              <div className="flex gap-[5px]" key={index}>
                {item.skills.map(
                  (skill, idx) =>
                    skill && (
                      <p key={`${index}${idx}`}>
                        {skill} {idx !== item.skills.length - 1 && ","}
                      </p>
                    )
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Template;
