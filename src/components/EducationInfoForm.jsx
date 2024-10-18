import TextField from "./TextField";
import Button from "./Button";
import { FieldArray } from "formik";
import { FaRegTrashAlt } from "react-icons/fa";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const EducationInfoForm = ({ formik }) => {
  return (
    <div>
      <h3 className="py-2 font-bold rounded-lg text-black text-lg mt-4">
        Education
      </h3>
      <FieldArray name="educationInfo">
        {({ insert, remove, push }) => (
          <>
            {formik.values.educationInfo?.map((_, index) => (
              <div
                className="grid lg:grid-cols-2 gap-4 mt-2 px-[12px] pt-4 pb-8 rounded border relative"
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
                  label={"Degree"}
                  name={`educationInfo[${index}].degree`}
                  onChange={formik?.handleChange}
                  value={formik.values.educationInfo[index].degree}
                />
                <TextField
                  label={"College/Institute"}
                  name={`educationInfo[${index}].institute`}
                  onChange={formik?.handleChange}
                  value={formik.values.educationInfo[index].institute}
                />
                <DatePicker
                  label={"Start Year"}
                  views={["year"]}
                  name={`educationInfo[${index}].start_date`}
                  openTo="year"
                  maxDate={dayjs()}
                  value={
                    formik.values.educationInfo[index].start_date
                      ? dayjs(`${formik.values.educationInfo[index].start_date}-01-01`)
                      : null
                  }
                  onChange={(value) => {
                    formik.setFieldValue(
                      `educationInfo[${index}].start_date`,
                      value ? value.year().toString() : ""
                    );
                  }}
                />
                <DatePicker
                  label={"Passout Year"}
                  name={`educationInfo[${index}].end_date`}
                  views={["year"]}
                  openTo="year"
                  maxDate={dayjs()}
                  value={
                    formik.values.educationInfo[index].end_date
                      ? dayjs(`${formik.values.educationInfo[index].end_date}-01-01`)
                      : null
                  }
                  onChange={(value) => {
                    formik.setFieldValue(
                      `educationInfo[${index}].end_date`,
                      value ? value.year().toString() : ""
                    );
                  }}
                />
              </div>
            ))}
            <div className="flex justify-end my-4">
              <Button
                size="small"
                category={
                  formik.values.educationInfo.length > 2
                    ? "disabled"
                    : "success"
                }
                outlined
                onClick={() =>
                  push({
                    degree: "",
                    institute: "",
                    start_date: "",
                    end_date: "",
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

export default EducationInfoForm;
