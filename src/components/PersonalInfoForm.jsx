import TextField from './TextField'

const PersonalInfoForm = ({formik}) => {
    console.log(formik.values)
  return (
    <div>
        <h3 className="py-2 font-semibold px-2 bg-[#cecdff] rounded text-white">Personal Information</h3>
        <div className="grid grid-cols-2 gap-4 mt-2 px-[12px] pt-4 pb-8 shadow-sm">
          <TextField label={"First Name"} name="personalInfo.firstName" onChange={formik?.handleChange} value={formik?.values?.personalInfo?.firstName}  />
          <TextField label={"Last Name"} name="personalInfo.lastName" onChange={formik?.handleChange} value={formik?.values?.personalInfo?.lastName} />
          <TextField label={"Phone Number"} name="personalInfo.phone" onChange={formik?.handleChange} value={formik?.values?.personalInfo?.phone} />
          <TextField label={"Email Id"} name="personalInfo.email" onChange={formik?.handleChange} value={formik?.values?.personalInfo?.email} />
          <TextField label={"GitHub Link"} name="personalInfo.github" onChange={formik?.handleChange} value={formik?.values?.personalInfo?.github} />
          <TextField label={"LinkedIn Link"} name="personalInfo.linkedin" onChange={formik?.handleChange} value={formik?.values?.personalInfo?.linkedin} />
          <TextField label={"Portfolio"} name="personalInfo.portfolio" onChange={formik?.handleChange} value={formik?.values?.personalInfo?.portfolio} />
          <TextField label={"Leetcode Link"} name="personalInfo.leetcode" onChange={formik?.handleChange} value={formik?.values?.personalInfo?.leetcode} />
        </div>
    </div>
  )
}

export default PersonalInfoForm