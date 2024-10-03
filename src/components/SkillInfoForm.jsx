import TextField from "./TextField";
import Button from "../components/Button";
import { useResumeInfo } from "../contexts/ResumeInfoContext";
import { FieldArray } from "formik";
import { FaRegTrashAlt } from "react-icons/fa";

const SkillInfoForm = ({ formik }) => {
  
  return (
    <div>
      <h3 className="py-2 font-bold rounded-lg text-black text-lg mt-4">
        Skills
      </h3>
      <FieldArray name="skillsInfo">
        {({ insert, remove, push }) => (
          <>
            {formik.values.skillsInfo?.map((skillGroup, index) => (
              <div
                className="grid grid-cols-1 gap-4 mt-2 px-[12px] pt-4 pb-8 shadow-sm rounded-lg border relative"
                key={index}
              >
                {index !== 0 && (
                  <button
                    className="absolute right-2 top-2 bg-red-200 p-[4px] rounded-full"
                    onClick={() => remove(index)}
                  >
                    <FaRegTrashAlt color="red" />
                  </button>
                )}

                <TextField
                  label={"Skill Type"}
                  name={`skillsInfo[${index}].skill_type`}
                  onChange={formik?.handleChange}
                  value={formik.values.skillsInfo[index].skill_type}
                />
                <FieldArray name={`skillsInfo[${index}].skills`}>
                  {({ push, remove }) => (
                    <div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm mb-[3px]">Skills</p>
                        <div className="flex gap-4">
                          <button
                            disabled={skillGroup.skills.length > 5}
                            className={`text-xs font-semibold ${
                              skillGroup.skills.length > 5
                                ? "text-gray-400 cursor-not-allowed"
                                : " text-blue-800 cursor-pointer"
                            }`}
                            type="button"
                            onClick={() => push("")}
                          >
                            Add Skill
                          </button>
                          <button
                            disabled={skillGroup.skills.length < 4}
                            className={`text-xs font-semibold ${
                              skillGroup.skills.length < 4
                                ? "text-gray-400 cursor-not-allowed"
                                : " text-red-800 cursor-pointer"
                            }`}
                            type="button"
                            onClick={() => remove()}
                          >
                            Delete Skill
                          </button>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {skillGroup.skills.map((skill, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <TextField
                              name={`skillsInfo[${index}].skills[${idx}]`}
                              placeholder="Skill"
                              onChange={formik?.handleChange}
                              value={
                                formik.values.skillsInfo[index].skills[idx]
                              }
                              width={"150px"}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </FieldArray>
              </div>
            ))}
            <div className="flex justify-end my-4">
              <Button
                size="small"
                category={
                  formik.values.skillsInfo.length > 3 ? "disabled" : "success"
                }
                outlined
                onClick={() =>
                  push({
                    skill_type: "",
                    skills: ["","",""],
                  })
                }
              >
                Add More
              </Button>
            </div>
          </>
        )}
      </FieldArray>
    </div>
  );
};

export default SkillInfoForm;
