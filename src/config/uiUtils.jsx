export const getResumeUIArray = (education, skills, experience, projects) => {
    const newItems = [
      {
        id: "1",
        content: (
          <div className="mt-[5px]">
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
        ),
      },
      {
        id: "2",
        content: (
          <div className="mt-[5px]">
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
        ),
      },
      {
        id: "3",
        content: (
          <div className="mt-[5px]">
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
        ),
      },
      {
        id: "4",
        content: (
          <div className="my-[5px]">
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
        ),
      },
    ];
    return newItems
  }


  export const getResumeUIArray2 = (education, skills, experience, projects) => {
    const newItems = [
      {
        id: "1",
        content: (
          <div className="mt-[5px]">
            <h3 className="px-[5px] text-base font-semibold bg-[#0741A1] text-white w-fit">
              Education
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
                  {item?.start_date && `${new Date(item.start_date).getFullYear()} - `}
                  {item?.end_date && new Date(item.end_date).getFullYear()}
                </p>
              </div>
            ))}
          </div>
        ),
      },
      {
        id: "2",
        content: (
          <div className="mt-[5px]">
            <h3 className="px-[5px] text-base font-semibold bg-[#0741A1] text-white w-fit">
              Experience
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
                        {exp?.start_date && `${new Date(exp.start_date).getFullYear()} - `}
                        {exp?.end_date && new Date(exp.end_date).getFullYear()}
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
        ),
      },
      {
        id: "3",
        content: (
          <div className="mt-[5px]">
            <h3 className="px-[5px] text-base font-semibold bg-[#0741A1] text-white w-fit">
              Projects
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
        ),
      },
      {
        id: "4",
        content: (
          <div className="my-[5px]">
            <h3 className="px-[5px] text-base font-semibold bg-[#0741A1] text-white w-fit">
              Skills
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
        ),
      },
    ];
    return newItems
  }