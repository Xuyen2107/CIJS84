import CustomInput from "../../Components/CustomInput.jsx";
import RadioInput from "../../Components/RadioInput.jsx";
import TextArea from "../../Components/Textarea.jsx";
import Select from "../../Components/Select.jsx";
import Button from "../../Components/Button.jsx";
import "./Register.css";
import UserHookRegister from "./Hook.js";

const dataRadio = [
   { key: 1, label: "Male" },
   { key: 2, label: "Female" },
   { key: 3, label: "Other" },
];
const dataOption = [
   { key: 1, name: "Option 1" },
   { key: 2, name: "Option 2" },
   { key: 3, name: "Option 3" },
   { key: 4, name: "Option 4" },
];

function Lesson3() {
   const { student, error, handleInputChange, submit } = UserHookRegister();
   return (
      <div className="form__register">
         <h1>Student Reregistration Form</h1>
         <hr />
         <form className="form">
            <CustomInput
               title="First Name"
               className="form__input--first-name"
               type="text"
               name="FirstName"
               value={student.FirstName}
               onChange={(e) => {
                  handleInputChange(e, "FirstName");
               }}
               placeholder="First Name"
               error={error.FirstName}
            />

            <CustomInput
               title="Middle Name"
               className="form__input--middle-name"
               type="text"
               value={student.MiddleName}
               onChange={(e) => {
                  handleInputChange(e, "MiddleName");
               }}
               placeholder="Middle Name"
               error={error.MiddleName}
            />
            <CustomInput
               title="Last Name"
               className="form__input--last-name"
               type="text"
               value={student.LastName}
               onChange={(e) => {
                  handleInputChange(e, "LastName");
               }}
               placeholder="Last Name"
               error={error.LastName}
            />
            <Select
               title="Course"
               dataOption={dataOption}
               value={student.Course}
               onChange={(e) => {
                  handleInputChange(e, "Course");
               }}
               optionDisabled="Chose Option"
               dataRadio={dataOption}
               error={error.Course}
            />
            <RadioInput
               title="Gender"
               name="Sex"
               checked={student.Gender}
               onChange={(e) => {
                  handleInputChange(e, "Gender");
               }}
               dataRadio={dataRadio}
               error={error.Gender}
            />
            <CustomInput
               title="Phone"
               className="form__input--phone"
               type="tel"
               value={student.Phone}
               onChange={(e) => {
                  handleInputChange(e, "Phone");
               }}
               placeholder="Phone no"
               error={error.Phone}
            />
            <TextArea
               title="Current Address"
               value={student.Address}
               onChange={(e) => {
                  handleInputChange(e, "Address");
               }}
               placeholder="Current Address"
               error={error.Address}
            />
            <CustomInput
               title="Email"
               className="form__input--email"
               type="email"
               value={student.Email}
               onChange={(e) => {
                  handleInputChange(e, "Email");
               }}
               placeholder="Enter Email"
               error={error.Email}
            />
            <CustomInput
               title="Password"
               className="form__input--password"
               type="password"
               value={student.Password}
               onChange={(e) => {
                  handleInputChange(e, "Password");
               }}
               placeholder="Enter Password"
               error={error.Password}
            />
            <CustomInput
               title="Re-type Password"
               className="form__input--re-password"
               type="password"
               placeholder="Re-type Password"
               value={student.RePassword}
               onChange={(e) => {
                  handleInputChange(e, "RePassword");
               }}
               error={error.RePassword}
            />
            <Button type="button" nameBtn="Register" onClick={submit} />
         </form>
      </div>
   );
}

export default Lesson3;
