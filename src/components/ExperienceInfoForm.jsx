import TextField from "./TextField";
import Button from "./Button";
import { FieldArray } from "formik";
import { FaRegTrashAlt } from "react-icons/fa";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const ExperienceInfoForm = ({ formik }) => {
  return (
    <div>
      <h3 className="py-2 font-bold rounded-lg text-black text-lg mt-4">
        EXPERIENCE
      </h3>
      <FieldArray name="experienceInfo">
        {({ insert, remove, push }) => (
          <>
            {formik.values.experienceInfo?.map((experienceGroup, index) => (
              <div
                className="grid grid-cols-1 gap-4 mt-2 px-[12px] pt-4 pb-8 rounded border relative"
                key={index}
              >
                {index !== 0 && (
                  <button
                    className="absolute right-2 top-2 bg-red-200 p-[4px] rounded-full"
                    onClick={() => remove(index)}
                  >
                    <FaRegTrashAlt color="red" size={12} />
                  </button>
                )}
                <div className="flex flex-col lg:flex-row gap-4">
                  <TextField
                    label={"Role Name"}
                    name={`experienceInfo[${index}].role`}
                    onChange={formik?.handleChange}
                    value={formik.values.experienceInfo[index].role}
                  />
                  <TextField
                    label={"Company Name"}
                    name={`experienceInfo[${index}].company`}
                    onChange={formik?.handleChange}
                    value={formik.values.experienceInfo[index].company}
                  />
                </div>
                <div className="grid lg:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      Start Year
                    </p>
                    <DatePicker
                      sx={{width: "100%"}}
                      views={["year"]}
                      name={`experienceInfo[${index}].start_date`}
                      openTo="year"
                      maxDate={dayjs()}
                      value={
                        formik.values.experienceInfo[index].start_date
                          ? dayjs(
                              `${formik.values.experienceInfo[index].start_date}-01-01`
                            )
                          : null
                      }
                      onChange={(value) => {
                        formik.setFieldValue(
                          `experienceInfo[${index}].start_date`,
                          value ? value.year().toString() : ""
                        );
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-semibold mb-2">
                      End Year
                    </p>
                    <DatePicker
                      sx={{width: "100%"}}
                      views={["year"]}
                      name={`experienceInfo[${index}].end_date`}
                      openTo="year"
                      maxDate={dayjs()}
                      value={
                        formik.values.experienceInfo[index].end_date
                          ? dayjs(
                              `${formik.values.experienceInfo[index].end_date}-01-01`
                            )
                          : null
                      }
                      onChange={(value) => {
                        formik.setFieldValue(
                          `experienceInfo[${index}].end_date`,
                          value ? value.year().toString() : ""
                        );
                      }}
                    />
                  </div>
                </div>
                <FieldArray name={`experienceInfo[${index}].description`}>
                  {({ push, remove }) => (
                    <div>
                      <div className="flex flex-col lg:flex-row justify-between">
                        <p className="text-sm mb-[3px]">Description</p>
                        <div className="flex gap-4">
                          <button
                            disabled={experienceGroup.description.length > 4}
                            className={`text-xs font-semibold ${
                              experienceGroup.description.length > 4
                                ? "text-gray-400 cursor-not-allowed"
                                : " text-blue-800 cursor-pointer"
                            }`}
                            type="button"
                            onClick={() => push("")}
                          >
                            Add Description
                          </button>
                          <button
                            disabled={experienceGroup.description.length < 2}
                            className={`text-xs font-semibold ${
                              experienceGroup.description.length < 2
                                ? "text-gray-400 cursor-not-allowed"
                                : " text-red-800 cursor-pointer"
                            }`}
                            type="button"
                            onClick={() =>
                              remove(experienceGroup.description.length - 1)
                            }
                          >
                            Delete Description
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 flex-wrap">
                        {experienceGroup.description.map((_, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <TextField
                              name={`experienceInfo[${index}].description[${idx}]`}
                              placeholder="Describe your key responsibilities and accomplishments."
                              onChange={formik?.handleChange}
                              value={
                                formik.values.experienceInfo[index].description[
                                  idx
                                ]
                              }
                              width={"100%"}
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
                  formik.values.experienceInfo.length > 3
                    ? "disabled"
                    : "success"
                }
                outlined
                onClick={() =>
                  push({
                    company: "",
                    role: "",
                    description: [""],
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

export default ExperienceInfoForm;
