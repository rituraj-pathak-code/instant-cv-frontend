import { FieldArray } from "formik";
import TextField from "./TextField";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../components/Button";
import { Textarea } from "@headlessui/react";

const ProjectsInfoForm = ({ formik }) => {
  console.log(formik.values);
  return (
    <div>
      <h3 className="py-2 font-semibold px-2  rounded-lg text-white border bg-[#8681FF]">
        Projects
      </h3>
      <FieldArray name="projectsInfo">
        {({ insert, remove, push }) => (
          <>
            {formik.values.projectsInfo?.map((_, index) => (
              <div
                className="grid grid-cols-2 gap-4 mt-2 px-[12px] pt-4 pb-8 shadow-sm rounded-lg border relative"
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
                <TextField
                  label={"Project Title"}
                  name={`projectsInfo[${index}].title`}
                  onChange={formik?.handleChange}
                  value={formik?.values?.projectsInfo[index]?.title}
                />
                <TextField
                  label={"Project Link"}
                  name={`projectsInfo[${index}].link`}
                  onChange={formik?.handleChange}
                  value={formik?.values?.projectsInfo[index]?.link}
                />
                {/* <TextField
                  label={"Project Description"}
                  name={`projectsInfo[${index}].description`}
                  onChange={formik?.handleChange}
                  value={formik?.values?.projectsInfo[index]?.description}
                /> */}
                <div>
                  <p className="text-xs font-semibold text-gray-600 mb-2">Project Description</p>
                  <Textarea
                    name={`projectsInfo[${index}].description`}
                    onChange={formik?.handleChange}
                    value={formik?.values?.projectsInfo[index]?.description}
                    className="border w-full h-[100px] rounded-lg text-sm p-2 focus:outline-none"
                    placeholder="Describe your project briefly"
                  />
                </div>
              </div>
            ))}
            <div className="flex justify-end my-4">
              <Button
                size="small"
                category={
                  formik.values.projectsInfo.length > 2 ? "disabled" : "success"
                }
                outlined
                onClick={() =>
                  push({
                    title: "",
                    link: "",
                    description: "",
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

export default ProjectsInfoForm;
